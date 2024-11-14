"use client";
import { useState } from "react";
import ProjectHeader from "../ProjectHeader";
import BoardView from "../BoardView";
import ListView from "../ListView";
import { GROUPED_PROJECT_TABS } from "@/constants/common.const";
import Timeline from "../TimelineView";

const groupedProject = GROUPED_PROJECT_TABS;

type Props = {
  params: { id: string };
};

const Project = ({ params }: Props) => {
  const { id } = params;
  const [activeTab, setActiveTab] = useState<string>(groupedProject.BOARD.code);
  const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false);

  return (
    <div>
      <ProjectHeader
        activeTab={activeTab}
        setActiveTab={(tabName) => setActiveTab(tabName)}
      />

      {activeTab === groupedProject.BOARD.code && (
        <BoardView id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
      )}

      {activeTab === groupedProject.LIST.code && (
        <ListView id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
      )}

      {activeTab === groupedProject.TIME_LINE.code && (
        <Timeline id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
      )}
    </div>
  );
};

export default Project;
