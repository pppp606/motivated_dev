import React from "react";
import { StatusCircle } from "../../../../presenters/statusCircle";
import { GoalSettingMenu } from "../../../../containers/pages/settings/goalSetting/goalSettingMenu";
import { Reward } from "../../../../repositories/api";

interface Props {
  rewards: Reward[];
  setIsOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>;
  setEditTargetGoal: (id: number) => void;
}

export const RewardSettingTable: React.FC<Props> = ({
  rewards,
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
          <td className="pl-24 text-left">Description</td>
          <td className="w-1/6 pl-2 text-center">
            <div className="items-center">Point</div>
          </td>
          <td className="w-12"></td>
        </tr>
      </thead>
      <tbody>
        {rewards.map((reward) => (
          <tr
            className="focus:outline-none h-16 border-b-8 border-gray-100 rounded bg-[#fafafa]"
            key={reward.reward_id}
          >
            <td className="">
              <div className="flex items-center pl-5">
                <StatusCircle
                  status={reward.is_achieved ? "active" : "inactive"}
                />
                <p className="text-base font-medium leading-none text-gray-700 mr-2">
                  {reward.name}
                </p>
              </div>
            </td>
            <td className="pl-24 text-left">
              <p className="text-sm leading-none text-gray-600 inline-block w-64 whitespace-pre-wrap">
                {reward.description}
              </p>
            </td>
            <td className="pl-5 text-center">
              <p className="text-sm leading-none text-gray-600">
                {reward.point}
              </p>
            </td>
            <td className="flex text-right">
              <div className="relative pr-4 pt-2 justify-end">
                <GoalSettingMenu
                  goalId={reward.reward_id}
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
