import { Row, Col, Pagination } from "antd";
import JobCard from "../JobCard";

const CardSection = ({ data, page, setPage }: any) => {
  const jobs = data?.data;
  const meta = data?.meta;

  return (
    <div>
      <style>
        {`
          .card-section {
            padding: 40px 80px;
          }
          @media (min-width: 768px) {
            .card-section {
              padding: 60px 100px;
            }
          }
          @media (min-width: 992px) {
            .card-section {
              padding: 60px 180px;
            }
          }
        `}
      </style>
      <div className="card-section">
        <Row gutter={80}>
          {jobs?.map((job: any) => (
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
        <Pagination
          current={page}
          pageSize={meta?.limit}
          total={meta?.total || 0}
          onChange={(value) => setPage(value)}
          style={{ marginTop: "20px", textAlign: "center" }}
        />
      </div>
    </div>
  );
};

export default CardSection;
