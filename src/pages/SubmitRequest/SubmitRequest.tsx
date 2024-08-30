import { FieldValues } from "react-hook-form";
import { useCreateCardMutation } from "../../redux/features/cardApi";
import { Button, Row } from "antd";
import HelpFrom from "../../components/form/JobFinderForm";
import HelpInput from "../../components/form/JobFinderInput";
import HelpTextArea from "../../components/form/JobFinderTextArea";
import { toast } from "sonner";

const SubmitRequest = () => {
  const  [createCard]  = useCreateCardMutation();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Query submit in!");

    try {
      //* Query submit in database
      const res = await createCard(data).unwrap();
      if (res.success) {
        toast.success("Query submit in successfully!", {
          id: toastId,
          duration: 2000,
        });
      }
    } catch (error: any) {
      toast.error(error?.message);
      console.error(error?.message);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f7f7f7",
        padding: "20px",
      }}
    >
      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "40px",
          maxWidth: "500px",
          width: "100%",
          boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
          backgroundColor: "white",
        }}
      >
        <h5 style={{ fontSize: "24px", textAlign: "center", marginBottom: "20px", marginTop: "20px" }}>
          Submit Your Query
        </h5>
        <p style={{ textAlign: "center", marginBottom: "30px", color: "#555" }}>
          Please provide detailed information about your query. Our team will get back to you as soon as possible.
        </p>
        <Row justify="center" align="middle">
          <HelpFrom onSubmit={onSubmit}>
            <HelpInput
              type="text"
              name="title"
              label="Title"
              width="400px"
              style={{ marginBottom: "20px" }}
            />
            <HelpTextArea
              name="description"
              label="Description"
              width="100%"
              style={{ marginBottom: "20px" }}
              rows={5}
            />

            <Button
              type="primary"
              style={{
                margin: "20px 0px",
                width: "100%",
                borderRadius: "4px",
                padding: "10px 0",
                backgroundColor: "#1890ff",
                borderColor: "#1890ff",
              }}
              htmlType="submit"
            >
              Submit Request
            </Button>
          </HelpFrom>
        </Row>
      </div>
    </div>
  );
};

export default SubmitRequest;
