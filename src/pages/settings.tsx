import React from "react";
import type { NextPage } from "next";
import { UserTwoColumn } from "../layouts/userTwoColumn";

import { GoalSetting } from "../containers/pages/settings/goalSetting";
import { RewardSetting } from "../containers/pages/settings/rewardSetting";

const Settings: NextPage = () => {
  return (
    <>
      <div className="flex flex-col h-screen">
        <UserTwoColumn>
          <div className="flex-grow">
            <div className="mb-24">
              <div className="w-full">
                <GoalSetting />
              </div>
            </div>
            <div className="mb-24">
              <h2 className="text-xl font-bold leading-normal mb-6">
                💰 <span className="text-red">Bonus</span> setting
              </h2>
            </div>
            <div className="mb-24">
              <RewardSetting />
            </div>
          </div>
        </UserTwoColumn>
      </div>
    </>
  );
};

export default Settings;
