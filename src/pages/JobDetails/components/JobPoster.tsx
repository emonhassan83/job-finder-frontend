import { Card, Avatar, Typography, Row, Col } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Text } = Typography;

const JobPoster = ({ user }: any) => {
    return (
        <Card title="Job Poster" bordered={false} style={{ marginTop: '40px' }}>
            <Row>
                <Col span={4}>
                    <Avatar size={64} icon={<UserOutlined />} />
                </Col>
                <Col span={20} style={{ paddingLeft: '16px' }}>
                    <Text strong>{user?.name || "John Doe"}</Text>
                    <div>
                        <Text>Email: {user?.email || "johndoe@example.com"}</Text>
                    </div>
                    <div>
                        <Text>Contact: {user?.contactNumber || "123-456-7890"}</Text>
                    </div>
                    <div>
                        <Text>Address: {user?.address || "123 Main St, City, Country"}</Text>
                    </div>
                </Col>
            </Row>
        </Card>
    );
};

export default JobPoster;
