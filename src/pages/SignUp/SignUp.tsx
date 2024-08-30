import { Button, Col, Row } from "antd";
import { FieldValues } from "react-hook-form";
import JobFinderFrom from "../../components/form/JobFinderForm";
import JobFinderInput from "../../components/form/JobFinderInput";
import { Link } from "react-router-dom";

const SignUp = () => {
  const defaultValues = {
    name: "",
    email: "",
    password: "",
    contactNumber: "",
    address: "",
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
        }}
      >
        <h5 style={{ fontSize: "20px", textAlign: "center", marginTop: "10px" }}>Sign Up</h5>
        <Row justify="center" align="middle" style={{ marginTop: "0px" }}>
          <JobFinderFrom onSubmit={onSubmit} defaultValues={defaultValues}>
            <JobFinderInput
              type="text"
              name="name"
              label="User Name"
              width="400px"
            />
            <JobFinderInput
              type="email"
              name="email"
              label="Email"
              width="400px"
            />
            <JobFinderInput
              type="password"
              name="password"
              label="Password"
              width="400px"
            />
            <Row gutter={16} style={{ marginTop: "20px" }}>
              <Col span={12}>
                <JobFinderInput
                  type="text"
                  name="contactNumber"
                  label="Contact Number"
                  width="100%"
                />
              </Col>
              <Col span={12}>
                <JobFinderInput
                  type="text"
                  name="address"
                  label="Address"
                  width="100%"
                />
              </Col>
            </Row>
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
              Register
            </Button>
            <p
              style={{
                fontSize: "12px",
                textAlign: "center",
                marginTop: "10px",
                fontWeight: "bold",
              }}
            >
              Already have an account?{" "}
              <Link to="/login" style={{ textDecoration: "underline" }}>
                Login
              </Link>
            </p>
          </JobFinderFrom>
        </Row>
      </div>
    </div>
  );
};

export default SignUp;
