import React from "react";
import { useForm, Controller } from "react-hook-form";
import { formatISO } from "date-fns";
import { toast } from "react-toastify";
import Modal from "@/components/Modal";
import { useCreateTaskMutation } from "@/state/api";
import { Priority, Status } from "@/enums/api.enum";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  id?: string | null;
};

const ModalNewTask = ({ isOpen, onClose, id = null }: Props) => {
  const [createTask, { isLoading }] = useCreateTaskMutation();
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
      status: Status.ToDo,
      priority: Priority.Backlog,
      tags: "",
      startDate: "",
      dueDate: "",
      authorUserId: "",
      assignedUserId: "",
      projectId: "",
    },
  });

  const handleModalClose = () => {
    reset(); // Clear data
    onClose(); // Close modal
  };

  const onSubmit = async (data: any) => {
    try {
      const formattedData = {
        ...data,
        startDate: formatISO(new Date(data.startDate), {
          representation: "complete",
        }),
        dueDate: formatISO(new Date(data.dueDate), {
          representation: "complete",
        }),
        authorUserId: parseInt(data.authorUserId),
        assignedUserId: parseInt(data.assignedUserId),
        projectId: id !== null ? Number(id) : Number(data.projectId),
      };

      await createTask(formattedData);
      toast.success("Task created successfully!");
      handleModalClose(); // Clear data and close modal after successful submission
    } catch (error) {
      toast.error("Failed to create task. Please try again.");
      console.error("Error creating task:", error);
    }
  };

  const inputStyles =
    "w-full rounded border border-gray-300 p-2 shadow-sm dark:border-dark-tertiary dark:bg-dark-tertiary dark:text-white dark:focus:outline-none";
  const selectStyles =
    "mb-4 block w-full rounded border border-gray-300 px-3 py-2 dark:border-dark-tertiary dark:bg-dark-tertiary dark:text-white dark:focus:outline-none";

  return (
    <Modal isOpen={isOpen} onClose={handleModalClose} name="Create New Task">
      <form
        className="mt-4 space-y-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="text"
          className={inputStyles}
          placeholder="Title"
          {...register("title", { required: "Title is required" })}
        />
        {errors.title && <p className="text-red-500">{errors.title.message}</p>}

        <textarea
          className={inputStyles}
          placeholder="Description"
          {...register("description")}
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-2">
          <select
            className={selectStyles}
            {...register("status")}
          >
            <option value={Status.ToDo}>To Do</option>
            <option value={Status.WorkInProgress}>Work In Progress</option>
            <option value={Status.UnderReview}>Under Review</option>
            <option value={Status.Completed}>Completed</option>
          </select>

          <select
            className={selectStyles}
            {...register("priority")}
          >
            <option value={Priority.Urgent}>Urgent</option>
            <option value={Priority.High}>High</option>
            <option value={Priority.Medium}>Medium</option>
            <option value={Priority.Low}>Low</option>
            <option value={Priority.Backlog}>Backlog</option>
          </select>
        </div>

        <input
          type="text"
          className={inputStyles}
          placeholder="Tags (comma separated)"
          {...register("tags")}
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-2">
          <Controller
            control={control}
            name="startDate"
            render={({ field }) => (
              <input
                type="date"
                className={inputStyles}
                {...field}
              />
            )}
          />
          <Controller
            control={control}
            name="dueDate"
            render={({ field }) => (
              <input
                type="date"
                className={inputStyles}
                {...field}
              />
            )}
          />
        </div>

        <input
          type="text"
          className={inputStyles}
          placeholder="Author User ID"
          {...register("authorUserId", { required: "Author User ID is required" })}
        />
        {errors.authorUserId && (
          <p className="text-red-500">{errors.authorUserId.message}</p>
        )}

        <input
          type="text"
          className={inputStyles}
          placeholder="Assigned User ID"
          {...register("assignedUserId")}
        />

        {id === null && (
          <input
            type="text"
            className={inputStyles}
            placeholder="Project ID"
            {...register("projectId", { required: "Project ID is required" })}
          />
        )}
        {errors.projectId && (
          <p className="text-red-500">{errors.projectId.message}</p>
        )}

        <button
          type="submit"
          className={`focus-offset-2 mt-4 flex w-full justify-center rounded-md border border-transparent bg-blue-primary px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 ${
            isLoading ? "cursor-not-allowed opacity-50" : ""
          }`}
          disabled={isLoading}
        >
          {isLoading ? "Creating..." : "Create Task"}
        </button>
      </form>
    </Modal>
  );
};

export default ModalNewTask;
