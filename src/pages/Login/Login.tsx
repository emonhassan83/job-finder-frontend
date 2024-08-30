import { Button, Divider, Row } from "antd";
import { FieldValues } from "react-hook-form";
import JobFinderFrom from "../../components/form/JobFinderForm";
import JobFinderInput from "../../components/form/JobFinderInput";
import { Link } from "react-router-dom";

const Login = () => {
  const defaultValues = {
    email: "",
    password: "",
  };

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          border: "1px solid rgb(194, 192, 192)",
          borderRadius: "8px",
          padding: "40px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          width: "100%",
          maxWidth: "500px",
        }}
      >
        <h5 style={{ fontSize: "20px", textAlign: "center", marginTop: "10px" }}>Login Here</h5>
        <Row justify="center" align="middle" style={{ marginTop: "25px" }}>
          <JobFinderFrom onSubmit={onSubmit} defaultValues={defaultValues}>
            <JobFinderInput
              width="400px"
              type="email"
              name="email"
              label="Email"
            />
            <JobFinderInput type="password" name="password" label="Password" />
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
              Login
            </Button>
            <Divider style={{ borderColor: "#5e5e5e" }}>OR</Divider>

            {/* <ShowCredentialButton /> */}
            <p
              style={{
                fontSize: "12px",
                textAlign: "center",
                marginTop: "10px",
                fontWeight: "bold",
              }}
            >
              Don't have an account?{" "}
              <Link to="/sign-up" style={{ textDecoration: "underline" }}>
                Register
              </Link>
            </p>
          </JobFinderFrom>
        </Row>
      </div>
    </div>
  );
};

export default Login;
