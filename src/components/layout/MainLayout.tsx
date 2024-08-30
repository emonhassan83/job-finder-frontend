import { Layout } from "antd";
const { Content } = Layout;
import NavbarComponent from "../shared/Navbar";
import FooterComponent from "../shared/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div
      style={{
        maxWidth: "1600px",
        margin: "0 auto",
      }}
    >
      <Layout>
        <NavbarComponent />
        <Content style={{ margin: "0" }}>
          <div
            style={{
              minHeight: 360,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <FooterComponent />
      </Layout>
    </div>
  );
};

export default MainLayout;
