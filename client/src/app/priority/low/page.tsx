import React from "react";
import { Priority } from "@/enums/api.enum";
import ReusablePriorityPage from "@/components/reusablePriorityPage";

const Low = () => {
  return <ReusablePriorityPage priority={Priority.Low} />;
};
export default Low;
