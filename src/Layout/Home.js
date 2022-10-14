import React, { useEffect, useState } from "react";
import { useLoadScript } from "@react-google-maps/api";
import axios from "axios";
import BarChart from "../Layout/utility/BarCharts";
import Btimeline from "../Layout/utility/timeline";
import Spinner from 'react-bootstrap/Spinner';
import {
  fetchPostsUsers,
  fetchUpcomingUsers,
  fetchMapData,
  fetchTimeLineData,
} from "../Layout/redux/actions/ApiCall";
import { useDispatch, useSelector } from "react-redux";
//import MapContainer from "../Layout/utility/map.js";
import GoogleMapsInfoWindow from "../Layout/utility/googleMaps";

const Home = () => {
  const postUserApi = useSelector((state) => state.reducerPosts);
  const upcomingUserApi = useSelector((state) => state.reducerUpcoming);
  const reducerMapData = useSelector((state) => state.reducerMapData);
  const reducerTimeLineData = useSelector((state) => state.reducerTimeLineData);



  const dispatch = useDispatch();
  const [mapData, setMapData] = useState([]);
  const [barData, setBarData] = useState([]);
  const [dataLoad, setdataLoad] = useState(false);
  console.log('dataLoad', dataLoad)
  const AllApi = async () => {
    setdataLoad(true);
    let endpoints = [
      "https://api.spacexdata.com/v3/capsules/past",
      "https://api.spacexdata.com/v3/capsules/upcoming",
      "https://api.spacexdata.com/v3/launchpads",
      "https://api.spacexdata.com/v3/launches",
    ];
    await axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((response) => {
        dispatch(fetchPostsUsers(response[0].data));
        dispatch(fetchUpcomingUsers(response[1].data));
        dispatch(fetchMapData(response[2].data));
        dispatch(fetchTimeLineData(response[3].data));
        setdataLoad(false);
      })
      .catch((err) => {
        console.log("error", err);
        setdataLoad(false);
      });
  };

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "", // Add your API key
    version: "weekly"
  });

  useEffect(() => {
    AllApi();
  }, []);

  useEffect(() => {
    if (reducerMapData?.mapData) {
      let mainData = [];
      reducerMapData?.mapData?.map((data, i) => {
        mainData.push({
          lat: data?.location?.latitude,
          lng: data?.location?.longitude,
        });
      });
      setMapData(mainData);
    }
    if (reducerTimeLineData?.timeLineData) {
      let y = [];
      let x = [];
      reducerTimeLineData?.timeLineData?.map((data, i) => {
        y.push(data?.flight_number);
        x.push(data?.launch_year);
      });
      let chartData = {
        x: x,
        y: y,
        type: "bar",
      };
      setBarData([chartData]);
    }
  }, [reducerMapData, reducerTimeLineData]);

  const PostCount = postUserApi?.postUsers?.map((a) => {
    return a?.capsule_id;
  });

  const upcomingCount = upcomingUserApi?.upcomingUsers?.map((a) => {
    return a.capsule_id;
  });

  const TotalCount = [...PostCount, ...upcomingCount];
  return (
    <div className="col-12 col-md-10">
      <div className="portlet-title mb-3 pl-0 font-size20">
        Analytics Dashoard{" "}
      </div>
      <div className="portlet mb-3">
        <div className="portlet-title mb-3">Launch Dashoard</div>

        <div className="d-flex justify-content-around">
          <div className="portlet p-15 mb-15 w-100 ml-15 mr-15">
            {dataLoad ? <div className="d-flex align-items-center justify-content-center h-100"><Spinner animation="border" variant="primary" /></div> :<>
            <div className="text_regular">{Object.keys(upcomingCount).length}</div>
            <div className="text_regular-gray">Upcoming</div>
            </>}
          </div>
          <div className="portlet p-15 mb-15 w-100 mr-15">
            {dataLoad ? <div className="d-flex align-items-center justify-content-center h-100"><Spinner animation="border" variant="primary" /></div> :<><div className="text_regular">{Object.keys(PostCount).length}</div>
            <div className="text_regular-gray">Past</div></>}
          </div>
          <div className="portlet p-15 mb-15 w-100 mr-15">
            {dataLoad ? <div className="d-flex align-items-center justify-content-center h-100"><Spinner animation="border" variant="primary" /></div> :<><div className="text_regular">{Object.keys(TotalCount).length}</div>
            <div className="text_regular-gray">Total</div></>}
          </div>
        </div>
      </div>

      <div className="row mr-md-0">
        <div className="col-12 col-md-4 pr-md-0">
          <div className="portlet mb-xs-3 mb-sm-3">
            <div className="portlet-title">Launchpad location</div>
            <div
              className="d-flex align-items-center "
              style={{ width: "100%", height: "calc(100vh - 380px)" }}
            >
              {!isLoaded ? <div className="d-flex align-items-center justify-content-center w-100 h-100"><Spinner animation="border" variant="primary" /></div> :<GoogleMapsInfoWindow
                data={mapData}
                centerData={{ lat: mapData[2]?.lat, lng: mapData[2]?.lng }}
              />}
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 pr-md-0">
          <div className="portlet">
            <div className="portlet-title">Launch Over Time</div>
            <div className="text-center" style={{ width: "100%", height: "calc(100vh - 380px)" }}>
              { dataLoad ? <div className="d-flex align-items-center justify-content-center h-100"><Spinner animation="border" variant="primary" /></div>
              : <BarChart barData={barData} />}
            
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 pr-md-0">
          <div className="portlet">
            <div className="portlet-title">Launch Timeline</div>
            <div
              className="pt-15 pb-15 btimeline"
              style={{ width: "100%", height: "calc(100vh - 380px)", overflow: "auto" }}
            >
              {dataLoad ? <div className="d-flex align-items-center justify-content-center h-100"><Spinner animation="border" variant="primary" /></div> : <Btimeline data={reducerTimeLineData} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
