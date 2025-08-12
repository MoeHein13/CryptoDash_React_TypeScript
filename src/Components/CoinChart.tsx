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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  TimeScale
);

import "chartjs-adapter-date-fns";
import { useEffect, useState } from "react";
import axios from "axios";

type idProp = {
  coinId?: string;
};

type priceProp = {
  x: number;
  y: number;
};

type ChartData = {
  datasets: {
    label: string;
    data: priceProp[];
    fill: boolean;
    borderColor: string;
    backgroundColor: string;
    pointRadius: number;
    tension: number;
  }[];
};

const API_URL = import.meta.env.VITE_COIN_API_URL;

const CoinChart = ({ coinId }: idProp) => {
  const [chartdata, setChartData] = useState<ChartData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${API_URL}/${coinId}/market_chart?vs_currency=usd&days=7`
        );

        const data = response.data;

        // console.log(data);

        const prices = data.prices.map((price: [number, number]) => ({
          x: price[0],
          y: price[1],
        }));

        console.log(prices);
        setChartData({
          datasets: [
            {
              label: "Price Chart (USD)",
              data: prices,
              fill: true,
              borderColor: "#d4941c",
              backgroundColor: "rgba(0,123,255,0.1)",
              pointRadius: 0,
              tension: 0.3,
            },
          ],
        });
      } catch (error: unknown) {
        console.error(
          error instanceof Error ? error.message : "Error Fetching"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [coinId]);

  const renderCoinChart = () => (
    <div className="mt-7.5 mb-3">
      <Line
        data={chartdata as ChartData}
        options={{
          responsive: true,
          plugins: {
            legend: { position: "bottom" as const },
            tooltip: {
              mode: "index",
              intersect: false,
            },
          },
          scales: {
            x: {
              ticks: {
                autoSkip: true,
                maxTicksLimit: 7,
              },
              type: "time",
              time: {
                unit: "day",
              },
            },
            y: {
              ticks: {
                callback: (value) => {
                  return `$ ${value.toLocaleString()}`;
                },
              },
            },
          },
        }}
      />
    </div>
  );

  return (
    <div>
      {loading && <p className="text-blue-600">Coin Chart is Loading ..... </p>}
      {chartdata && renderCoinChart()}
    </div>
  );
};

export default CoinChart;
