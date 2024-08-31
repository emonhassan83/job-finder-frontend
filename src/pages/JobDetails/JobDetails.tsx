import { useParams } from "react-router-dom";
import { useGetAJobQuery } from "../../redux/features/jobApi";
import { Divider } from "antd";
import FullPageLoading from "../../components/shared/Loader";
import JobHeader from "./components/JobHeader";
import JobDescription from "./components/JobDescription";
import JobPoster from "./components/JobPoster";
import RelatedJobs from "./components/RelatedJobs";

const JobDetails = () => {
    const { id } = useParams();
    const { data, isLoading } = useGetAJobQuery(id);

    if (isLoading) {
        return <FullPageLoading />;
    }

    const job = data?.data;

    return (
        <div style={{ padding: "40px 80px" }}>
        <JobHeader job={job} />
        <Divider />
        <JobDescription job={job} />
        <JobPoster user={job?.user} jobId={job.id} />
        <RelatedJobs id={id} />
    </div>
    );
};

export default JobDetails;
