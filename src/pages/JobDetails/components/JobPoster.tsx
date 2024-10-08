import { Card, Avatar, Typography, Row, Col, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useState } from "react";
import JobApplicationModal from "../../../components/dialoag/JobApplicationModal";
import { useGetMyProfileQuery } from "../../../redux/features/userApi";

const { Text } = Typography;

const JobPoster = ({ user, jobId }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data } = useGetMyProfileQuery({});

  const currentUser = data?.data;

  return (
    <>
      <JobApplicationModal
        open={isModalOpen}
        setOpen={setIsModalOpen}
        jobId={jobId}
      />
      <Card title="Job Poster" bordered={false} style={{ marginTop: "40px" }}>
        <Row>
          <Col span={4}>
            <Avatar size={64} icon={<UserOutlined />} />
          </Col>
          <Col span={20} style={{ paddingLeft: "16px" }}>
            <Text strong>{user?.name || "John Doe"}</Text>
            <div>
              <Text>Email: {user?.email || "johndoe@example.com"}</Text>
            </div>
            <div>
              <Text>Contact: {user?.contactNumber || "123-456-7890"}</Text>
            </div>
            <div>
              <Text>
                Address: {user?.address || "123 Main St, City, Country"}
              </Text>
            </div>
          </Col>
        </Row>
      </Card>
      <Button
        type="primary"
        size="large"
        style={{ marginTop: "20px" }}
        onClick={() => setIsModalOpen(true)}
        disabled={currentUser?.role !== "USER"}
      >
        Apply Now
      </Button>
    </>
  );
};

export default JobPoster;
