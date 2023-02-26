import React, { useEffect, useState } from "react";
import { Drawer } from "../../../../presenters/drawer";
import { GoalSettingEditForm } from "./goalSettingEditForm";
import { GoalSettingTable } from "./goalSettingTable";
import { Button } from "@material-tailwind/react";
import {
  Goal,
  GoalFormValue,
  Term,
  Service,
  ServiceValue,
  getGoals,
  getTerms,
  getServices,
  getServiceValues,
  putGoal,
  postGoal,
} from "../../../../repositories/api";

const initialFormValue: GoalFormValue = {
  goal_id: 0,
  name: "",
  point: 0,
  service_value_id: 0,
  term_id: 0,
  value: 0,
  is_active: false,
};

export const GoalSetting: React.FC = () => {
  const [goals, setGoals] = useState<Goal[]>([]);
  const [isOpenGoalEditDrawer, setIsOpenGoalEditDrawer] =
    useState<boolean>(false);
  const [terms, setTerms] = useState<Term[]>([]);
  const [services, setServices] = useState<Service[]>([]);
  const [serviceValues, setServiceValues] = useState<ServiceValue[]>([]);
  const [formValues, setFormValues] = useState<GoalFormValue>(initialFormValue);

  const setEditTargetGoal = (goalId: number) => {
    const targetGoal = goals.find((goal) => goal.goal_id === goalId);
    if (targetGoal) {
      setFormValues({
        goal_id: targetGoal.goal_id,
        name: targetGoal.name,
        point: targetGoal.point,
        service_value_id: targetGoal.service_value_id,
        term_id: targetGoal.term_id,
        value: targetGoal.value,
        is_active: targetGoal.is_active,
      });
    }
  };

  const checkedOnChangeHandler = (value: boolean, name: string) => {
    setFormValues({
      ...formValues,
      [name]: Number(value),
    });
  };

  const selectOnChangeHandler = (value: string, name: string) => {
    setFormValues({
      ...formValues,
      [name]: Number(value),
    });
  };

  const inputOnChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const name: string = event.target.name;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const addGoalHandler = () => {
    setFormValues(initialFormValue);
    setIsOpenGoalEditDrawer(true);
  };

  const submitHandler = async () => {
    // TODO: ターゲットとタームが重複したサービスにアラートを表示
    const response =
      formValues.goal_id !== 0
        ? await putGoal(formValues)
        : await postGoal(formValues);
    if (response) {
      setIsOpenGoalEditDrawer(false);
      if (!response.error) {
        fetchData();
      }
    }
  };

  const fetchData = async () => {
    // TODO: use promise.all
    const goals = await getGoals();
    if (goals) {
      setGoals(goals);
    }

    const terms = await getTerms();
    if (terms) {
      setTerms(terms);
    }

    const services = await getServices();
    if (services) {
      setServices(services);
    }

    const serviceValues = await getServiceValues();
    if (serviceValues) {
      setServiceValues(serviceValues);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="py-4 md:py-7 md:pb-2">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold leading-normal mb-6">
            🥅 <span className="text-red">Goal</span> setting
          </h2>
          <div className="py-3 px-4 flex items-center">
            <div className="inline-flex items-start justify-start">
              <Button color="red" size="sm" onClick={addGoalHandler}>
                Add Goal
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <GoalSettingTable
          goals={goals}
          setIsOpenDrawer={setIsOpenGoalEditDrawer}
          setEditTargetGoal={setEditTargetGoal}
        />
      </div>
      <Drawer
        isOpen={isOpenGoalEditDrawer}
        setIsOpenDrawer={setIsOpenGoalEditDrawer}
      >
        {isOpenGoalEditDrawer &&
          terms.length > 0 &&
          services.length > 0 &&
          serviceValues.length > 0 && (
            <GoalSettingEditForm
              formValues={formValues}
              terms={terms}
              services={services}
              serviceValues={serviceValues}
              inputOnChangeHandler={inputOnChangeHandler}
              selectOnChangeHandler={selectOnChangeHandler}
              checkedOnChangeHandler={checkedOnChangeHandler}
              submitHandler={submitHandler}
            />
          )}
      </Drawer>
    </>
  );
};
