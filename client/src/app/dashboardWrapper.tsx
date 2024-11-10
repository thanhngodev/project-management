import DashboardLayout from "@/components/DashboardLayout";
import React from "react";
// import StoreProvider, { useAppSelector } from "./redux";

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    // <StoreProvider>
    <DashboardLayout>{children}</DashboardLayout>
    // </StoreProvider>
  );
};
export default DashboardWrapper;
