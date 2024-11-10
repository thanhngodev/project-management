import DashboardLayout from "@/components/DashboardLayout";
import React from "react";
import StoreProvider from "./redux/StoreProvider";

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <DashboardLayout>{children}</DashboardLayout>
    </StoreProvider>
  );
};
export default DashboardWrapper;
