import React from "react";
import { useForm, Controller } from "react-hook-form";
import { toast } from "react-toastify";
import { formatISO } from "date-fns";
import Modal from "@/components/Modal";
import { useCreateProjectMutation } from "@/state/api";
import { INPUT_STYLES } from "@/constants/common.const";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const ModalNewProject = ({ isOpen, onClose }: Props) => {
  const [createProject, { isLoading }] = useCreateProjectMutation();
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      projectName: "",
      description: "",
      startDate: "",
      endDate: "",
    },
  });

  const handleModalClose = () => {
    reset(); // Clear data form
    onClose(); // Close modal
  };

  const onSubmit = async (data: any) => {
    try {
      const formattedData = {
        name: data.projectName,
        description: data.description,
        startDate: formatISO(new Date(data.startDate), {
          representation: "complete",
        }),
        endDate: formatISO(new Date(data.endDate), {
          representation: "complete",
        }),
      };

      await createProject(formattedData).unwrap();
      toast.success("Project created successfully!");
      handleModalClose(); // Clear data form and close modal
    } catch (error) {
      toast.error("Failed to create project. Please try again.");
      console.error("Error creating project:", error);
    }
  };

  const inputStyles = INPUT_STYLES;

  return (
    <Modal isOpen={isOpen} onClose={handleModalClose} name="Create New Project">
      <form className="mt-4 space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          className={inputStyles}
          placeholder="Project Name"
          {...register("projectName", { required: "Project name is required" })}
        />
        {errors.projectName && (
          <p className="text-red-500">{errors.projectName.message}</p>
        )}

        <textarea
          className={inputStyles}
          placeholder="Description"
          {...register("description", { required: "Description is required" })}
        />
        {errors.description && (
          <p className="text-red-500">{errors.description.message}</p>
        )}

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-2">
          <Controller
            control={control}
            name="startDate"
            rules={{ required: "Start date is required" }}
            render={({ field }) => (
              <input type="date" className={inputStyles} {...field} />
            )}
          />
          {errors.startDate && (
            <p className="text-red-500">{errors.startDate.message}</p>
          )}

          <Controller
            control={control}
            name="endDate"
            rules={{ required: "End date is required" }}
            render={({ field }) => (
              <input type="date" className={inputStyles} {...field} />
            )}
          />
          {errors.endDate && (
            <p className="text-red-500">{errors.endDate.message}</p>
          )}
        </div>

        <button
          type="submit"
          className={`focus-offset-2 mt-4 flex w-full justify-center rounded-md border border-transparent bg-blue-primary px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 ${
            isLoading ? "cursor-not-allowed opacity-50" : ""
          }`}
          disabled={isLoading}
        >
          {isLoading ? "Creating..." : "Create Project"}
        </button>
      </form>
    </Modal>
  );
};

export default ModalNewProject;
