import React from "react";
import { GooeyCircleLoader } from "react-loaders-kit";

function Loader() {

  const loaderProps = {
    loading: true,
    size: 100,
    duration: 0.5,
    colors: ["#FE654F"]
  };

  return (
    <div className="loader">
        <GooeyCircleLoader {...loaderProps} />
    </div>
  );
}

export default Loader;