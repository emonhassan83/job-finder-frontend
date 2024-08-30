import { AreaChartOutlined } from "@ant-design/icons";
import { Layout, Button } from "antd";
import { Link } from "react-router-dom";
const { Header } = Layout;

const NavbarComponent = () => {
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

      <Link to="/login">
        <Button type="default" ghost>
          Login
        </Button>
      </Link>
    </Header>
  );
};

export default NavbarComponent;
