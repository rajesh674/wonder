import React, { memo } from "react";
import { GoogleMap } from "@react-google-maps/api";
import Markers from "./Markers";

const style = {
  height: `calc(100vh - 380px)`
};

export default memo(function({ data , center }) {
  return (
    <GoogleMap zoom={0} center={center} mapContainerStyle={style}>
      <Markers data={data} />
    </GoogleMap>
  );
});
