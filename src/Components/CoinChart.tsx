import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  TimeScale,
} from "chart.js";

import "chartjs-adapter-date-fns";

const API_URL = import.meta.env.VITE_COIN_API_URL;

const CoinChart = () => {
  return <div>CoinChart</div>;
};

export default CoinChart;
