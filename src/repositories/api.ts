import { supabase } from "../lib/supabase-client";

export type Goal = {
  goal_id: number;
  name: string;
  point: number;
  service_value_id: number;
  term_id: number;
  user_id: string;
  value: number;
  is_active: boolean;
  terms: {
    term_id: number;
    name: string;
    created_at: string | null;
  };
  service_values: {
    name: string;
    services: {
      service_id: number;
      name: string;
      created_at: string | null;
    };
  };
};

export type GoalFormValue = {
  goal_id: number;
  name: string;
  point: number;
  service_value_id: number;
  term_id: number;
  value: number;
  is_active: boolean;
};

export type ServiceValue = {
  service_value_id: number;
  service_id: number;
  name: string;
};

export type Service = {
  service_id: number;
  name: string;
};

export type Term = {
  term_id: number;
  name: string;
};

export type Reward = {
  reward_id: number;
  name: string;
  description: string;
  point: number;
  is_achieved: boolean;
};

export const getGoal = async (goal_id: number) => {
  const response = await supabase
    .from("goals")
    .select(
      `
      *,
      terms(*),
      service_values(name, services(*))
    `
    )
    .eq("goal_id", goal_id);

  if (response.data) {
    return response.data.map((goal) => goal as unknown as Goal);
  }

  return [];
};

export const getGoals = async () => {
  const response = await supabase.from("goals").select(`
      *,
      terms(*),
      service_values(name, services(*))
    `);

  if (response.data) {
    return response.data.map((goal) => goal as unknown as Goal);
  }

  return [];
};

export const putGoal = async (goal: GoalFormValue) => {
  const response = await supabase
    .from("goals")
    .update({
      name: goal.name,
      point: goal.point,
      service_value_id: goal.service_value_id,
      term_id: goal.term_id,
      value: goal.value,
      is_active: goal.is_active,
    })
    .eq("goal_id", goal.goal_id);
  return response;
};

export const postGoal = async (goal: GoalFormValue) => {
  const response = await supabase.from("goals").insert({
    name: goal.name,
    point: goal.point,
    service_value_id: goal.service_value_id,
    term_id: goal.term_id,
    value: goal.value,
    is_active: goal.is_active,
  });

  return response;
};

export const getServiceValues = async () => {
  const response = await supabase.from("service_values").select("*");

  if (response.data) {
    return response.data.map(
      (service_value) => service_value as unknown as ServiceValue
    );
  }

  return [];
};

export const getServices = async () => {
  const response = await supabase.from("services").select("*");

  if (response.data) {
    return response.data.map((service) => service as unknown as Service);
  }

  return [];
};

export const getTerms = async () => {
  const response = await supabase.from("terms").select("*");

  if (response.data) {
    return response.data.map((term) => term as unknown as Term);
  }

  return [];
};

export const getRewards = async () => {
  const response = await supabase.from("rewards").select("*");

  if (response.data) {
    return response.data.map((term) => term as unknown as Reward);
  }

  return [];
};
