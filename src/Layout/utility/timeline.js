import React from "react";

export default function Btimeline({ data }) {

  const getRandomColor = () => {
		var letters = "0123456789ABCDEF";
		var color = "#";
		for (var i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	};
  return (
    <ul>
      {data?.timeLineData?.map((el, i) => {
        return (
          <li>{el?.launch_date_utc}</li>
        );
      })}
    </ul>
  );
}
