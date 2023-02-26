import React from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  IconButton,
} from "@material-tailwind/react";

interface Props {
  goalId: number;
  setIsOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>;
  setEditTargetGoal: (id: number) => void;
}

export const GoalSettingMenu: React.FC<Props> = ({
  goalId,
  setIsOpenDrawer,
  setEditTargetGoal,
}) => {
  const openGoalEdit = () => {
    setEditTargetGoal(goalId);
    setIsOpenDrawer(true);
  };

  return (
    <Menu placement="bottom-end">
      <MenuHandler>
        <IconButton variant="text" color="red">
          <span className="material-symbols-outlined text-gray-600">menu</span>
        </IconButton>
      </MenuHandler>
      <MenuList className="min-w-[100px]">
        <MenuItem onClick={openGoalEdit}>Edit</MenuItem>
        <MenuItem>Delete</MenuItem>
      </MenuList>
    </Menu>
  );
};
