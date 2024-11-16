import React from "react";
import { Priority } from "@/enums/api.enum";
import ReusablePriorityPage from "@/components/reusablePriorityPage";

const Urgent = () => {
  return <ReusablePriorityPage priority={Priority.Urgent} />;
};
export default Urgent;
