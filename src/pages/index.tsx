import type { NextPage } from "next";
import { useRouter } from 'next/router'
import dynamic from "next/dynamic"
import React from "react";
import { Header } from "../containers/header";
import { Circle } from "../presenters/chart/circle";
import CountUp from 'react-countup';

const Chart = dynamic(() => 
  import("react-apexcharts"), {
  ssr: false,
})
import { ApexOptions } from 'apexcharts';

const Home: NextPage = () => {
  const router = useRouter();

  const goSignup = () => {
    router.push("/signup");
  };

  const goLogin = () => {
    router.push("/login");
  };

  const chartOptions: ApexOptions = {
    chart: {
      id: "basic-bar",
      toolbar: {
        show: false,
      },
      animations: {
        easing: 'easeout',
        speed: 600,
      },
    },
    annotations: {
      yaxis: [{
        y: 100,
        borderColor: '#e7152d',
        label: {
          borderColor: '#e7152d',
          style: {
            color: '#fff',
            background: '#e7152d',
          },
          text: 'Buy MBP 💻',
        }
      }],
    },
    xaxis: {
      type: 'datetime',
      categories: ['1/4/2023', '1/5/2023', '1/6/2023', '1/7/2023', '1/8/2023', '1/9/2023', '1/10/2023', '1/11/2023'],
      tickAmount: 1,
    },
    colors: ["#e7152d"],
    forecastDataPoints: {
      count: 3
    },
    stroke: {
      width: 5,
      curve: 'smooth',
    },
  }

  const chartData = {
    series: [
      {
        name: "points",
        data: [30, 40, 50, 75, 88, 105, 112, 131]
      }
    ]
  };

  return (
    <>
      <div className="flex flex-col h-screen">
        <Header />
        <div className="flex-grow pt-24">
          <div className="max-w-4xl mx-auto pt-12 px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 md:leading-tight">
              Stay motivated<br />
              <span className="text-[#e7152d]">to learn programming!</span>
            </h1>
            <p className="text-lg mb-4">
              A rewards program that you set <span className="text-[#e7152d]">yourself</span>
            </p>
            <p className="text-lg mb-12">
              Set incentives to reach your goals and stay on track for work and learning to code. <span className="text-[#e7152d]">No need to compete with anyone</span>. Reward yourself for achieving your goals
            </p>
            <div className="mb-24">
              <h2 className="text-xl font-bold leading-normal mb-2">
                🚴‍♂️ <span className="text-[#e7152d]">Track</span> your progress
              </h2>
              <p className="text-lg mb-6">Set your goals, e.g. 10 contributions a day on github</p>
              <div className="flex flex-row">
                <div className="basis-1/3 text-center">
                  <div className="mx-auto w-[100px] mb-2">
                    <Circle
                      score={90}
                      size={100}
                      color="#e7152d"
                    />
                  </div>
                  <p className="text-lg">Daily Goal</p>
                </div>
                <div className="basis-1/3 text-center">
                  <div className="mx-auto w-[100px] mb-2">
                    <Circle
                      score={20}
                      size={100}
                      color="#e7152d"
                    />
                  </div>
                  <p className="text-lg">Weekly Goal</p>
                </div>
                <div className="basis-1/3 text-center">
                  <div className="mx-auto w-[100px] mb-2">
                    <Circle
                      score={30}
                      size={100}
                      color="#e7152d"
                    />
                  </div>
                  <p className="text-lg">Monthly Goal</p>
                </div>
              </div>
            </div>
            <div className="mb-24">
              <h2 className="text-xl font-bold leading-normal mb-2">
                🏆 <span className="text-[#e7152d]">Achieved</span> times
              </h2>
              <p className="text-lg mb-6">Decide on a reward for achieving. You may be motivated if you give a bonus when you achieve it in a row</p>
              <div className="flex flex-row mb-12">
                <div className="basis-1/3 text-center">
                  <div className="mx-auto w-[100px] mb-2 text-3xl font-bold text-[#e7152d]">
                    <CountUp
                      end={108}
                      duration={0.75}
                    />
                  </div>
                  <p className="text-lg">Daily Achieved</p>
                </div>
                <div className="basis-1/3 text-center">
                  <div className="mx-auto w-[100px] mb-2 text-3xl font-bold text-[#e7152d]">
                    <CountUp
                      end={14}
                      duration={0.75}
                    />
                  </div>
                  <p className="text-lg">Weekly Achieved</p>
                </div>
                <div className="basis-1/3 text-center">
                  <div className="mx-auto w-[100px] mb-2 text-3xl font-bold text-[#e7152d]">
                    <CountUp
                      end={3}
                      duration={0.75}
                    />
                  </div>
                  <p className="text-lg">Monthly Achieved</p>
                </div>
              </div>
              <div className="flex flex-row mb-6">
                <div className="basis-1/3 text-center">
                  <div className="mx-auto w-[100px] mb-2 text-3xl font-bold text-[#e7152d]">
                    <CountUp
                      end={12}
                      duration={0.75}
                    />
                  </div>
                  <p className="text-lg">Continues Day</p>
                </div>
                <div className="basis-1/3 text-center">
                  <div className="mx-auto w-[100px] mb-2 text-3xl font-bold text-[#e7152d]">
                    <CountUp
                      end={1}
                      duration={0.75}
                    />
                  </div>
                  <p className="text-lg">Continues Week</p>
                </div>
                <div className="basis-1/3 text-center">
                  <div className="mx-auto w-[100px] mb-2 text-3xl font-bold text-[#e7152d]">
                    <CountUp
                      end={0}
                      duration={0.75}
                    />
                  </div>
                  <p className="text-lg">Continues Month</p>
                </div>
              </div>
            </div>
            <div className="mb-24">
              <h2 className="text-xl font-bold leading-normal mb-2">
                🎂 Earn points and <span className="text-[#e7152d]">reward yourself</span>
              </h2>
              <p className="text-lg mb-6">Set a reward line, e.g. buy MBP for 100 points</p>
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
            <div className="mb-12">
              <h2 className="text-xl font-bold leading-normal mb-4">
                🚧 Values ​​that can be used for goals
              </h2>
              <p className="text-lg">Github contributions count, Codewars Completed Challenges count. and more in preparation</p>
              <p className="text-lg">If there is a value that motivates you, <a href="" className="text-[#e7152d] underline">please request it</a></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
