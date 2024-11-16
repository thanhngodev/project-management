import React from "react";
import { Priority } from "@/enums/api.enum";
import ReusablePriorityPage from "@/components/reusablePriorityPage";

const Hight = () => {
  return <ReusablePriorityPage priority={Priority.High} />;
};
export default Hight;
