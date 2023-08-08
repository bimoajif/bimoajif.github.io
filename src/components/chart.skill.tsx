import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

export const data = {
  labels: ['UI/UX', 'design', 'web dev', 'data', 'mobile dev', 'software dev',],
  datasets: [
    {
      data: [9, 11, 7, 6, 9, 8],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 2,
    },
  ],
};

export const options = {
  plugins: {
    legend: {
      display: false
    },
  },
  scales: {
    r: {
      beginAtZero: true,
      ticks: {
        maxTicksLimit: 12,
        stepSize: 4,
        callback: function (value: any) {
          const labels = ['beginner', 'intermediate', 'pro'];
          return labels[(value / 4) - 1];
        },
      },
    },
  },
  layout: {
    padding: 5,
  },
  maintainAspectRatio: false,
};

export default function Chart() {
  return (
    <div className='h-[45vh]'>
      {/* <h1 className='text-center font-extrabold underline'>Hard Skills</h1> */}
      <Radar data={data} height={100} width={500} options={options} />
    </div>
  );
}
