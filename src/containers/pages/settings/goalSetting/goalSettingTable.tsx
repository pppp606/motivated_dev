import React from "react";
import { StatusCircle } from "../../../../presenters/statusCircle";
import { GoalSettingMenu } from "../../../../containers/pages/settings/goalSetting/goalSettingMenu";
import { Goal } from "../../../../repositories/api";

interface Props {
  goals: Goal[];
  setIsOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>;
  setEditTargetGoal: (id: number) => void;
}

export const GoalSettingTable: React.FC<Props> = ({
  goals,
  setIsOpenDrawer,
  setEditTargetGoal,
}) => {
  return (
    <table className="whitespace-nowrap w-full">
      <thead>
        <tr className="focus:outline-none h-8 border border-gray-100 rounded text-sm">
          <td className="w-1/4">
            <div className="flex items-center pl-5">Name</div>
          </td>
          <td className="pl-24 text-left">Target</td>
          <td className="w-1/6 pl-2 text-center">
            <div className="items-center">Point</div>
          </td>
          <td className="w-12"></td>
        </tr>
      </thead>
      <tbody>
        {goals.map((goal) => (
          <tr
            className="focus:outline-none h-16 border-b-8 border-gray-100 rounded bg-[#fafafa]"
            key={goal.goal_id}
          >
            <td className="">
              <div className="flex items-center pl-5">
                <StatusCircle status={goal.is_active ? "active" : "inactive"} />
                {goal.is_active}
                <p className="text-base font-medium leading-none text-gray-700 mr-2">
                  {goal.name}
                </p>
              </div>
            </td>
            <td className="pl-24 text-left">
              <p className="text-sm leading-none text-gray-600 inline-block w-64 md:border-r-2 border-gray-400 mr-4">
                {goal.service_values.services.name} {goal.service_values.name}
              </p>
              <p className="text-sm leading-none text-gray-600 hidden md:inline-block ">
                {goal.value} / {goal.terms.name}
              </p>
            </td>
            <td className="pl-5 text-center">
              <p className="text-sm leading-none text-gray-600">{goal.point}</p>
            </td>
            <td className="flex">
              <div className="relative pr-4 pt-2 justify-end">
                <GoalSettingMenu
                  goalId={goal.goal_id}
                  setIsOpenDrawer={setIsOpenDrawer}
                  setEditTargetGoal={setEditTargetGoal}
                />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
