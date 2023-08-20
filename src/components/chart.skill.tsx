import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

export const soft_data = {
  labels: ['software dev', 'git', 'react', 'flutter', 'python', 'tailwind CSS'],
  datasets: [
    {
      data: [10, 7, 8, 9, 5, 8],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 2,
    },
  ],
};

export const des_data = {
  labels: ['design', 'figma', 'adobe illustrator', 'adobe photoshop', 'research', 'wireframing'],
  datasets: [
    {
      data: [9, 10, 11, 8, 7, 9],
      backgroundColor: 'rgba(239, 167, 70, 0.2)',
      borderColor: 'rgba(239, 167, 70, 1)',
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
// million-ignore
export default function Chart() {
  return (
    <section className='flex h-[45vh] justify-center my-10 font-extrabold text-center'>
      <div>
        <h1>programming skills</h1>
        <Radar data={soft_data} height={200} width={400} options={options} />
      </div>
      <div>
        <h1>UI/UX skills</h1>
        <Radar data={des_data} height={200} width={400} options={options} />
      </div>
    </section>
  );
}
