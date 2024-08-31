import { Modal, Button, Typography } from "antd";
import { FieldValues } from "react-hook-form";
import JobFinderFrom from "../form/JobFinderForm";
import JobFinderInput from "../form/JobFinderInput";
import JobFinderUpload from "../form/JobFinderUpload";
import uploadImageToImgbb from "../../utils/imageUploader";
import JobFinderTextArea from "../form/JobFinderTextArea";
import { useState } from "react";
import { useGetMyProfileQuery } from "../../redux/features/userApi";
import FullPageLoading from "../shared/Loader";
import { useCreateApplicationMutation } from "../../redux/features/applicationApi";
import { toast } from "sonner";

type TDefaultValues = {
  name: string;
  email: string;
  contactNumber: string;
  address: string;
};

const JobApplicationModal = ({ open, setOpen, jobId }: any) => {
  const [resumeUrl, setResumeUrl] = useState<string>("");
  const { data, isLoading } = useGetMyProfileQuery({});
  const [createApplication] = useCreateApplicationMutation();
  //   console.log(data);

  const user = data?.data;

  const defaultValues: TDefaultValues = {
    name: user?.name,
    email: user?.email,
    contactNumber: user?.contactNumber,
    address: user?.address,
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleFileUpload = async (file: File) => {
    toast.loading("File uploading in!");
    try {
      const imageUrl = await uploadImageToImgbb(file);

      setResumeUrl(imageUrl);
    } catch (error) {
      console.error("Failed to upload image:", error);
    }
  };

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Submit application in!");
    try {
      const applicationData = {
        userId: user.id,
        jobId: jobId,
        resumeUrl,
        coverLetter: data?.coverLetter,
        notes: data?.note,
      };
      const res = await createApplication(applicationData).unwrap();
      // console.log(res);
      
      if (res.success) {
        toast.success("Submit application successfully!", {
          id: toastId,
          duration: 2000,
        });
      }
    } catch (error: any) {
      toast.error(error.message, { id: toastId });
    }
  };

  if (isLoading) {
    return <FullPageLoading />;
  }

  return (
    <Modal
      visible={open}
      onCancel={handleCancel}
      footer={null}
      title={<Typography.Title level={3}>Apply for this Job</Typography.Title>}
      width={600}
    >
      <JobFinderFrom onSubmit={onSubmit} defaultValues={defaultValues}>
        <JobFinderInput
          width="550px"
          type="text"
          name="name"
          label="Enter Your Name"
        />
        <JobFinderInput width="550px" type="email" name="email" label="Email" />
        <JobFinderInput
          width="550px"
          type="text"
          name="contactNumber"
          label="Contact Number"
        />
        <JobFinderInput
          width="550px"
          type="text"
          name="address"
          label="Address"
        />
        <JobFinderUpload
          name="resumeUrl"
          label="Upload Resume"
          onFileUpload={handleFileUpload}
        />
        <JobFinderTextArea
          width="550px"
          name="coverLetter"
          label="Cover Letter"
        />
        <JobFinderTextArea width="550px" name="note" label="Additional: Note" />

        <Button
          style={{
            marginTop: "20px",
            width: "100%",
            borderRadius: "4px",
            backgroundColor: "#1890ff",
            color: "#fff",
          }}
          htmlType="submit"
        >
          Submit Application
        </Button>
      </JobFinderFrom>
    </Modal>
  );
};

export default JobApplicationModal;
