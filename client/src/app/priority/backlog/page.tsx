import React from "react";
import { Priority } from "@/enums/api.enum";
import ReusablePriorityPage from "@/components/reusablePriorityPage";

const Backlog = () => {
  return <ReusablePriorityPage priority={Priority.Backlog} />;
};
export default Backlog;
