import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { CRYPTO_BASE_URL } from '../../config/constants';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

interface Props {
  coinId: string;
}

const PriceChart: React.FC<Props> = ({ coinId }) => {
  const [chartData, setChartData] = useState<number[]>([]);
  const [labels, setLabels] = useState<string[]>([]);

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        const res = await fetch(
          `${CRYPTO_BASE_URL}/${coinId}/market_chart?vs_currency=usd&days=7`
        );
        if (!res.ok) throw new Error('Failed to fetch chart data');
        const data = await res.json();
        const prices = data.prices;

        setChartData(prices.map((p: number[]) => p[1]));
        setLabels(prices.map((p: number[]) => {
          const date = new Date(p[0]);
          return `${date.getMonth() + 1}/${date.getDate()}`;
        }));
      } catch (err) {
        console.error(err);
      }
    };

    setTimeout(()=>{
      fetchChartData();
    }, 100)
  }, [coinId]);

  return (
    <>
      <h3>7-Day Price Chart</h3>
      <Line
        height={400}
        width={500}
        style={{backgroundColor : '#080808', borderRadius: '20px'}}
        data={{
          labels,
          datasets: [
            {
              label: 'Price (USD)',
              data: chartData,
              borderColor: 'lime',
              backgroundColor: 'red',
              tension: 0.3
            }
          ]
        }}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false }
          },
          scales: {
            x: { ticks: { color: '#fff' } },
            y: { ticks: { color: '#fff' } }
          }
        }}
      />
    </>
  );
};

export default PriceChart;
