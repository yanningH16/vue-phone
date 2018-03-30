const Planning = resolve => {
  import("@/components/planning").then(module => {
    resolve(module);
  });
};
const PlanningOpen = resolve => {
  import("@/components/planning_open").then(module => {
    resolve(module);
  });
};
const planning = [
  {
    path: "planning",
    component: Planning,
    name: "planning",
    meta: { title: "规划审批" }
  },
  {
    path: "planning/planning_open",
    component: PlanningOpen,
    name: "planning_open",
    meta: { title: "规划审批" }
  }
];
export default planning;
