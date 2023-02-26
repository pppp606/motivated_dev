import React from "react";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { Circle } from "../presenters/chart/circle";
import { UserTwoColumn } from "../layouts/userTwoColumn";
import CountUp from "react-countup";
import { useAuth } from "../containers/authContextProvider";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
import { ApexOptions } from "apexcharts";

const Dashboard: NextPage = () => {
  const { user } = useAuth();
  console.log(user);

  const chartOptions: ApexOptions = {
    chart: {
      id: "basic-bar",
      toolbar: {
        show: false,
      },
      animations: {
        easing: "easeout",
        speed: 600,
      },
    },
    annotations: {
      yaxis: [
        {
          y: 100,
          borderColor: "#e7152d",
          label: {
            borderColor: "#e7152d",
            style: {
              color: "#fff",
              background: "#e7152d",
            },
            text: "Buy MBP 💻",
          },
        },
      ],
    },
    xaxis: {
      type: "datetime",
      categories: [
        "1/4/2023",
        "1/5/2023",
        "1/6/2023",
        "1/7/2023",
        "1/8/2023",
        "1/9/2023",
        "1/10/2023",
        "1/11/2023",
      ],
      tickAmount: 1,
    },
    colors: ["#e7152d"],
    forecastDataPoints: {
      count: 3,
    },
    stroke: {
      width: 5,
      curve: "smooth",
    },
  };

  const chartData = {
    series: [
      {
        name: "points",
        data: [30, 40, 50, 75, 88, 105, 112, 131],
      },
    ],
  };

  return (
    <div className="flex flex-col h-screen">
      <UserTwoColumn>
        <div className="flex-grow">
          <div className="px-4">
            <div className="mb-24">
              <h2 className="text-xl font-bold leading-normal mb-6">
                🎂 Earn points and{" "}
                <span className="text-red">reward yourself</span>
              </h2>
              <div className="mb-6">
                <div className="-ml-4">
                  <Chart
                    options={chartOptions}
                    series={chartData.series}
                    type="line"
                    width="100%"
                    height={300}
                  />
                </div>
              </div>
            </div>
            <div className="mb-24">
              <h2 className="text-xl font-bold leading-normal mb-6">
                🚴‍♂️ <span className="text-red">Track</span> your progress
              </h2>
              <div className="flex flex-row">
                <div className="basis-1/3 text-center">
                  <div className="mx-auto w-[100px] mb-2">
                    <Circle score={90} size={100} color="#e7152d" />
                  </div>
                  <p className="text-lg">Daily Goal</p>
                </div>
                <div className="basis-1/3 text-center">
                  <div className="mx-auto w-[100px] mb-2">
                    <Circle score={20} size={100} color="#e7152d" />
                  </div>
                  <p className="text-lg">Weekly Goal</p>
                </div>
                <div className="basis-1/3 text-center">
                  <div className="mx-auto w-[100px] mb-2">
                    <Circle score={30} size={100} color="#e7152d" />
                  </div>
                  <p className="text-lg">Monthly Goal</p>
                </div>
              </div>
            </div>
            <div className="mb-24">
              <h2 className="text-xl font-bold leading-normal mb-6">
                🏆 <span className="text-red">Achieved</span> times
              </h2>
              <div className="flex flex-row mb-12">
                <div className="basis-1/3 text-center">
                  <div className="mx-auto w-[100px] mb-2 text-3xl font-bold text-red">
                    <CountUp end={108} duration={0.75} />
                  </div>
                  <p className="text-lg">Daily Achieved</p>
                </div>
                <div className="basis-1/3 text-center">
                  <div className="mx-auto w-[100px] mb-2 text-3xl font-bold text-red">
                    <CountUp end={14} duration={0.75} />
                  </div>
                  <p className="text-lg">Weekly Achieved</p>
                </div>
                <div className="basis-1/3 text-center">
                  <div className="mx-auto w-[100px] mb-2 text-3xl font-bold text-red">
                    <CountUp end={3} duration={0.75} />
                  </div>
                  <p className="text-lg">Monthly Achieved</p>
                </div>
              </div>
              <div className="flex flex-row mb-6">
                <div className="basis-1/3 text-center">
                  <div className="mx-auto w-[100px] mb-2 text-3xl font-bold text-red">
                    <CountUp end={12} duration={0.75} />
                  </div>
                  <p className="text-lg">Continues Day</p>
                </div>
                <div className="basis-1/3 text-center">
                  <div className="mx-auto w-[100px] mb-2 text-3xl font-bold text-red">
                    <CountUp end={1} duration={0.75} />
                  </div>
                  <p className="text-lg">Continues Week</p>
                </div>
                <div className="basis-1/3 text-center">
                  <div className="mx-auto w-[100px] mb-2 text-3xl font-bold text-red">
                    <CountUp end={0} duration={0.75} />
                  </div>
                  <p className="text-lg">Continues Month</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </UserTwoColumn>
    </div>
  );
};

export default Dashboard;
