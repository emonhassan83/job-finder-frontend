import { AreaChartOutlined } from "@ant-design/icons";
import { Layout, Row, Col } from "antd";

const { Footer } = Layout;

const FooterComponent = () => {
  return (
    <Footer style={{ backgroundColor: "#001529", padding: "20px 50px", color: "white" }}>
      <Row gutter={16} justify="space-between">
        {/* Column 1 */}
        <Col xs={24} sm={12} md={6} lg={4}>
          <h4>Abstract</h4>
          <ul style={{ listStyle: "none", paddingLeft: 0 }}>
            <li>Branches</li>
          </ul>
        </Col>

        {/* Column 2 */}
        <Col xs={24} sm={12} md={6} lg={4}>
          <h4>Resources</h4>
          <ul style={{ listStyle: "none", paddingLeft: 0 }}>
            <li>Blog</li>
            <li>Help Center</li>
            <li>Release Notes</li>
            <li>Status</li>
          </ul>
        </Col>

        {/* Column 3 */}
        <Col xs={24} sm={12} md={6} lg={4}>
          <h4>Community</h4>
          <ul style={{ listStyle: "none", paddingLeft: 0 }}>
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>Facebook</li>
            <li>Dribbble</li>
            <li>Podcast</li>
          </ul>
        </Col>

        {/* Column 4 */}
        <Col xs={24} sm={12} md={6} lg={4}>
          <h4>Company</h4>
          <ul style={{ listStyle: "none", paddingLeft: 0 }}>
            <li>About Us</li>
            <li>Careers</li>
            <li>Legal</li>

            <li style={{ marginTop: "10px", fontWeight: "600" }}>Contact Us</li>
            <li>info@jobfinder.com</li>
          </ul>
        </Col>

        {/* Column 5 */}
        <Col xs={24} lg={8} style={{ textAlign: "right", marginTop: 20 }}>
        <AreaChartOutlined style={{ fontSize: 40 }} />
          <p>
            © Copyright {new Date().getFullYear()} <br /> Job Finder Studio Design, Inc. All rights
            reserved.
          </p>
        </Col>
      </Row>
    </Footer>
  );
};

export default FooterComponent;
