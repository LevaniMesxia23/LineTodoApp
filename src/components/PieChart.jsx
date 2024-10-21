import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJs,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useContext } from "react";
import { MyContext } from "../context/Context";
import { useTranslation } from "react-i18next";

ChartJs.register(ArcElement, Title, Tooltip, Legend);

function PieChart() {
  const { tasks } = useContext(MyContext);
  const {t} = useTranslation()
  const completedTasks = tasks.filter(task => task.complate).length;
  const inProgressTasks = tasks.filter(task => !task.complate).length;
  const stuckTasks = tasks.filter(task => task.important).length;
  const totalTasks = tasks.length;

  const data = {
    labels: [
      `Completed (${((completedTasks / totalTasks) * 100).toFixed(1)}%)`,
      `In Progress (${((inProgressTasks / totalTasks) * 100).toFixed(1)}%)`,
      `Important (${((stuckTasks / totalTasks) * 100).toFixed(1)}%)`,
    ],
    datasets: [
      {
        data: [completedTasks, inProgressTasks, stuckTasks],
        backgroundColor: [
          '#80BC00',
          '#FFA400',
          '#6E7C7C',
        ],
        borderWidth: 2, 
        borderColor: '#FFFFFF',
      },
    ],
  };

  const options = {
    responsive: true,
    cutout: '0%', // Set to 0 for a fully filled circle
    plugins: {
      legend: {
        display: false, // Hide the default legend
      },
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            const label = tooltipItem.label || '';
            const value = tooltipItem.raw;
            const percentage = ((value / totalTasks) * 100).toFixed(1);
            return `${label}: ${value} (${percentage}%)`;
          },
        },
      },
    },
  };

  return (
    <div className="flex items-center mt-10 lg:gap-20 md:flex-row lg:flex-row mb-12 flex-col gap-12">
      <div className="flex-1">
        <Pie data={data} options={options}/>
      </div>
      <div className="ml-5">
        <ul className="mt-2 flex flex-col gap-6">
          <li>
            <span style={{ color: '#80BC00' }}>●</span> {t("Completed")}: {completedTasks} ({((completedTasks / totalTasks) * 100).toFixed(1)}%)
          </li>
          <li>
            <span style={{ color: '#FFA400' }}>●</span> {t("In Progress")}: {inProgressTasks} ({((inProgressTasks / totalTasks) * 100).toFixed(1)}%)
          </li>
          <li>
            <span style={{ color: '#6E7C7C' }}>●</span> {t("Important")}: {stuckTasks} ({((stuckTasks / totalTasks) * 100).toFixed(1)}%)
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PieChart;
