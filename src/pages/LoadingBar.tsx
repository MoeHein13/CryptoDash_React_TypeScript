import type { CSSProperties } from "react";
import { BarLoader } from "react-spinners";

const overRide: CSSProperties = {
  display: "block",
  margin: "0 auto",
};

type Prop = {
  color?: string;
  height?: number;
  width?: number;
};

const LoadingBar = ({ color = "green", height = 30, width = 100 }: Prop) => {
  return (
    <div>
      <BarLoader
        aria-label="Loading Spinner"
        cssOverride={overRide}
        color={color}
        height={height}
        width={width}
        data-testid="loader"
      />
    </div>
  );
};

export default LoadingBar;
