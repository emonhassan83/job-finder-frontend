import {
  BuildOutlined,
  DollarOutlined,
  EnvironmentOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { Card } from "antd";
import { useState } from "react";

type JobID = string | null;

const JobCard = ({ job }: any) => {
  const [hoveredCard, setHoveredCard] = useState<JobID>(null);

  const handleMouseEnter = () => {
    setHoveredCard(job?.id);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  const truncateDescription = (text: string, maxLength: number) => {
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  };

  return (
    <div
      style={{
        transition: "box-shadow 0.3s ease, transform 0.3s ease",
        cursor: "pointer",
        boxShadow:
          hoveredCard === job?.id ? "0 6px 12px rgba(0, 0, 0, 0.2)" : "none",
        transform: hoveredCard === job?.id ? "translateY(-5px)" : "none",
        borderRadius: "40px",
        border: "1px solid #ddd",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Card
        title={
          <div
            style={{
              borderBottom: "2px solid #ddd",
              paddingBottom: "15px",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            {job?.title}
          </div>
        }
        style={{
          padding: "20px",
          backgroundColor: "#F4F6F8",
          borderRadius: "10px",
        }}
      >
        <p style={{ marginTop: "-10px" }}>
          {truncateDescription(job?.description, 150)}
        </p>
        <p style={{ marginBottom: "10px" }}>
          <HomeOutlined style={{ marginRight: "8px" }} />
          <strong>Company:</strong> {job?.company}
        </p>
        <p style={{ marginBottom: "10px" }}>
          <EnvironmentOutlined style={{ marginRight: "8px" }} />
          <strong>Location:</strong> {job?.location}
        </p>
        <p style={{ marginBottom: "10px" }}>
          <DollarOutlined style={{ marginRight: "8px" }} />
          <strong>Salary:</strong> ${job?.salary}
        </p>
        <p style={{ marginBottom: "10px" }}>
          <BuildOutlined style={{ marginRight: "8px" }} />
          <strong>Skills:</strong> {job?.skills.join(", ")}
        </p>
        
        <button
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "#1890ff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={() => (window.location.href = `/jobs/${job?.id}`)}
        >
          Apply Now
        </button>
      </Card>
    </div>
  );
};

export default JobCard;
