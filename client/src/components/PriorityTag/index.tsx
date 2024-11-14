import { ITask } from "@/interfaces/api.interface";

const priorityTagTask = {
  Urgent: "bg-red-200 text-red-700",
  High: "bg-yellow-200 text-yellow-700",
  Medium: "bg-green-200 text-green-700",
  Low: "bg-blue-200 text-blue-700",
};

const priorityDefault = "bg-gray-200 text-gray-700";

const PriorityTag = ({ priority }: { priority: ITask["priority"] }) => {
  const priorityTag = priorityTagTask[priority as keyof typeof priorityTagTask];
  return (
    <div
      className={`rounded-full px-2 py-1 text-xs font-semibold ${
        priorityTag || priorityDefault
      }`}
    >
      {priority}
    </div>
  );
};

export default PriorityTag;
