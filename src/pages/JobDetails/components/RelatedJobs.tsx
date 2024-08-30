import { Col, Row } from "antd";
import Title from "antd/es/typography/Title";
import { useGetAllJobsQuery } from "../../../redux/features/jobApi";
import JobCard from "../../../components/JobCard";

const RelatedJobs = ({ id }: { id: string | undefined }) => {
  const { data } = useGetAllJobsQuery([]);
  const relatedJobs = data?.data.filter((job: any) => job.id !== id);

  return (
    <div style={{ marginTop: "40px" }}>
      <Title level={3}>Related Jobs</Title>
      <Row gutter={[16, 16]}>
        {relatedJobs?.slice(0, 4)?.map((job: any) => (
          <Col
            xs={24}
            sm={24}
            md={12}
            key={job?.id}
            style={{ marginBottom: "30px" }}
          >
            <JobCard job={job} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default RelatedJobs;
