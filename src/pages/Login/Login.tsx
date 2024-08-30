import { Button, Divider, Row } from "antd";
import { FieldValues } from "react-hook-form";
import JobFinderFrom from "../../components/form/JobFinderForm";
import JobFinderInput from "../../components/form/JobFinderInput";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { useAppDispatch } from "../../redux/hooks";
import { toast } from "sonner";
import { setUser } from "../../redux/features/auth/authSlice";
import { verifyToken } from "../../utils/verifyToken";

const Login = () => {
  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const defaultValues = {
    email: "alice@example.com",
    password: "user123",
  };

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Login in!");

    try {
      const userInfo = {
        email: data.email,
        password: data.password,
      };

      // * Login user here
      const res = await login(userInfo).unwrap();
      console.log("Login User: ", res);

      const user = verifyToken(res.data.accessToken);

      if (res.success) {
        // * set user credentials in state
        dispatch(setUser({ user: user, token: res?.data?.accessToken }));
        navigate("/");

        toast.success("Login in successfully!", {
          id: toastId,
          duration: 2000,
        });
      }
    } catch (error: any) {
      toast.error(error.message, { id: toastId });
    }
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
        <h5
          style={{ fontSize: "20px", textAlign: "center", marginTop: "10px" }}
        >
          Login Here
        </h5>
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
