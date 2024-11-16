import React from "react";
import { Priority } from "@/enums/api.enum";
import ReusablePriorityPage from "@/components/reusablePriorityPage";

const Medium = () => {
  return <ReusablePriorityPage priority={Priority.Medium} />;
};
export default Medium;
