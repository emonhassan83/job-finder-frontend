import { AreaChartOutlined } from "@ant-design/icons";
import { Layout, Button } from "antd";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logout, useCurrentToken } from "../../redux/features/auth/authSlice";
import { verifyToken } from "../../utils/verifyToken";
const { Header } = Layout;

const NavbarComponent = () => {
  const dispatch = useAppDispatch();
  const token = useAppSelector(useCurrentToken);
  let user;
  if (token) {
    user = verifyToken(token);
  }

  const handleLogout = () => {
    toast.success("User logged out successfully!");
    dispatch(logout());
  };
  return (
    <Header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <Link to="/">
          <div className="demo-logo" style={{ marginRight: 16 }}>
            <span style={{ color: "white", fontSize: 14 }}>
              <AreaChartOutlined style={{ fontSize: 18, marginRight: "5px" }} />
              Job Finder
            </span>
          </div>
        </Link>
      </div>

      {user ? (
        <Button className="bg-white" onClick={handleLogout}>
          Logout
        </Button>
      ) : (
        <Link to="/login">
          <Button type="default" ghost>
            Login
          </Button>
        </Link>
      )}
    </Header>
  );
};

export default NavbarComponent;
