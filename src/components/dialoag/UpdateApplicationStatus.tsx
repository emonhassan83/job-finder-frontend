import { Button, Modal } from "antd";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import JobFinderFrom from "../form/JobFinderForm";
import JobFinderSelect from "../form/JobFinderSelect";
import { useUpdateAApplicationMutation } from "../../redux/features/applicationApi";

type TDefaultValues = {
  status?: string;
};

const statusOptions = [
  {
    value: "PENDING",
    label: "PENDING",
  },
  {
    value: "ACCEPTED",
    label: "ACCEPTED",
  },
];

const UpdateApplicationStatusModal = ({ application }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updateAApplication] = useUpdateAApplicationMutation();

  const defaultValues: TDefaultValues = {
    status: application?.status,
  };

  const handleSubmit = async (data: FieldValues) => {
    const statusData = {
      id: application?.key,
      data: data,
    };
    
    try {
      const res = await updateAApplication(statusData).unwrap();

      if (res.success) {
        toast.success("Application status in successfully!", {
          duration: 2000,
        });
        setIsModalOpen(false);
      }
    } catch (error: any) {
      toast.error(error.message);
      setIsModalOpen(false);
    }
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button onClick={showModal} size="small" style={{ marginTop: "16px" }}>
        Update
      </Button>
      <Modal
        title="Change Application Status"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <JobFinderFrom onSubmit={handleSubmit} defaultValues={defaultValues}>
          <JobFinderSelect
            name="status"
            options={statusOptions}
            label="Application status"
          />

          <Button htmlType="submit" size="small">
            Update Status
          </Button>
        </JobFinderFrom>
      </Modal>
    </>
  );
};

export default UpdateApplicationStatusModal;
