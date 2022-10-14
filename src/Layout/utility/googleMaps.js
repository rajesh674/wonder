import React, { useState, useMemo } from "react";

import Map from "./map";

const GoogleMapsInfoWindow = ({data,centerData}) => {
  const [value, setValue] = useState("");

  const handleChangeInput = e => {
    setValue(e.target.value);
  };
  console.log('centerData', centerData)

  // assume this is a property that can be dynamic
  const center = useMemo(() => (centerData && centerData),[]);

  return (
    <div className="w-100">
      <input
        type="text"
        placeholder="type here"
        value={value}
        onChange={e => handleChangeInput(e)}
        style={{visibility:'hidden'}}
      />
      
      <Map data={data && data} center={center} />
    </div>
  );
};

export default GoogleMapsInfoWindow;
