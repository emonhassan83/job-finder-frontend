import { Row, Col, Typography } from "antd";
import {
  DollarOutlined,
  EnvironmentOutlined,
  CalendarOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

const JobHeader = ({ job }: any) => {
  return (
    <div>
      <Title className="job-title">{job?.title}</Title>
      <Title level={2} className="job-company">
        {job?.company}
      </Title>
      <div className="job-info">
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <div className="job-info-item">
              <EnvironmentOutlined style={{ marginRight: "10px" }} />
              <Text>{job?.location || "New York, NY"}</Text>
            </div>
            <div className="job-info-item">
              <DollarOutlined style={{ marginRight: "10px" }} />
              <Text>Salary: ${job?.salary || "70,000"}</Text>
            </div>
          </Col>
          <Col span={12}>
            <div className="job-info-item">
              <CalendarOutlined style={{ marginRight: "10px" }} />
              <Text>
                Posted on:{" "}
                {new Date(job?.createdAt).toLocaleDateString() || "08/29/2024"}
              </Text>
            </div>
            <div className="job-info-item">
              <CalendarOutlined style={{ marginRight: "10px" }} />
              <Text>
                Updated on:{" "}
                {new Date(job?.updatedAt).toLocaleDateString() || "08/29/2024"}
              </Text>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default JobHeader;
