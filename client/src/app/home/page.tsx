"use client";
import ChartCard from "@/components/ChartCard";
import Header from "@/components/Header";
import { Priority } from "@/enums/api.enum";
import { dataGridClassNames, dataGridSxStyles } from "@/lib/utils";
import { useGetProjectsQuery, useGetTasksQuery } from "@/state/api";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useMemo } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useAppSelector } from "../redux/redux";

const taskColumns: GridColDef[] = [
  { field: "title", headerName: "Title", width: 200 },
  { field: "status", headerName: "Status", width: 150 },
  { field: "priority", headerName: "Priority", width: 150 },
  {
    field: "dueDate",
    headerName: "Due Date",
    width: 200,
  },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const HomePage = () => {
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  const {
    data: tasks,
    isLoading: tasksLoading,
    isError: tasksError,
  } = useGetTasksQuery({ projectId: 1 });

  const { data: projects, isLoading: projectsLoading } = useGetProjectsQuery();

  const isLoading = tasksLoading || projectsLoading;
  const isError = tasksError || !tasks || !projects;

  const chartColors = useMemo(
    () =>
      isDarkMode
        ? {
            bar: "#8884d8",
            barGrid: "#303030",
            pieFill: "#4A90E2",
            text: "#FFFFFF",
          }
        : {
            bar: "#8884d8",
            barGrid: "#E0E0E0",
            pieFill: "#82ca9d",
            text: "#000000",
          },
    [isDarkMode],
  );

  const priorityCount = useMemo(() => {
    if (!tasks) return {};
    return tasks.reduce((acc: Record<string, number>, task) => {
      const { priority } = task;
      acc[priority as Priority] = (acc[priority as Priority] || 0) + 1;
      return acc;
    }, {});
  }, [tasks]);

  const taskDistribution = useMemo(
    () =>
      Object.keys(priorityCount).map((key) => ({
        name: key,
        count: priorityCount[key],
      })),
    [priorityCount],
  );

  const statusCount = useMemo(() => {
    if (!projects) return {};
    return projects.reduce((acc: Record<string, number>, project) => {
      const status = project.endDate ? "Completed" : "Active";
      acc[status] = (acc[status] || 0) + 1;
      return acc;
    }, {});
  }, [projects]);

  const projectStatus = useMemo(
    () =>
      Object.keys(statusCount).map((key) => ({
        name: key,
        count: statusCount[key],
      })),
    [statusCount],
  );

  if (isLoading) return <div>Loading..</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
    <div className="container h-full w-[100%] bg-gray-100 bg-transparent p-8">
      <Header name="Project Management Dashboard" />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* Task Priority Distribution */}
        <ChartCard title="Task Priority Distribution">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={taskDistribution}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke={chartColors.barGrid}
              />
              <XAxis dataKey="name" stroke={chartColors.text} />
              <YAxis stroke={chartColors.text} />
              <Tooltip
                contentStyle={{
                  width: "min-content",
                  height: "min-content",
                }}
              />
              <Legend />
              <Bar dataKey="count" fill={chartColors.bar} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* Project Status */}
        <ChartCard title="Project Status">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                dataKey="count"
                data={projectStatus}
                fill={chartColors.pieFill}
                label
              >
                {projectStatus.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* Your Tasks */}
        <ChartCard title="Your Tasks" className="md:col-span-2">
          <div style={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={tasks}
              columns={taskColumns}
              checkboxSelection
              loading={tasksLoading}
              getRowClassName={() => "data-grid-row"}
              getCellClassName={() => "data-grid-cell"}
              className={dataGridClassNames}
              sx={dataGridSxStyles(isDarkMode)}
            />
          </div>
        </ChartCard>
      </div>
    </div>
  );
};

export default HomePage;
