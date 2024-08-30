import { Typography, Tag, Space } from 'antd';

const { Title } = Typography;

const JobDescription = ({ job }: any) => {
    return (
        <div className="job-description">
            <Title level={3}>Job Description</Title>
            <p>
                {job?.description || "We are looking for a highly skilled Frontend Developer who is passionate about creating seamless user experiences."}
            </p>
            <p>
                You will work closely with our design and backend teams to bring new features to life, ensuring that our applications are responsive, fast, and accessible across all devices.
            </p>
            <Title level={3}>Required Skills</Title>
            <Space>
                {job?.skills?.map((skill: any) => (
                    <Tag color="magenta" key={skill}>{skill}</Tag>
                ))}
            </Space>
        </div>
    );
};

export default JobDescription;
