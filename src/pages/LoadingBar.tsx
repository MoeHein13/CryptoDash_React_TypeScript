import type { CSSProperties } from "react";
import { CircleLoader } from "react-spinners";

const overRide: CSSProperties = {
  display: "block",
  margin: "0 auto",
};

type Prop = {
  color?: string;
  height?: number;
  width?: number;
  size?: number;
};

const LoadingBar = ({ color = "green", size = 100 }: Prop) => {
  return (
    <div>
      <CircleLoader
        aria-label="Loading Spinner"
        cssOverride={overRide}
        color={color}
        // height={height}
        // width={width}
        size={size}
        data-testid="loader"
      />
    </div>
  );
};

export default LoadingBar;
