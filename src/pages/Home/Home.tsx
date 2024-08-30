import { useState } from "react";
import Banner from "../../components/ui/Banner";
import CardSection from "../../components/ui/CardSection";
import FullPageLoading from "../../components/shared/Loader";
import { useGetAllJobsQuery } from "../../redux/features/jobApi";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const { data, isLoading } = useGetAllJobsQuery([
    { name: "page", value: page },
    { name: "searchTerm", value: searchTerm },
  ]);
  console.log(data);

  if (isLoading) {
    return <FullPageLoading />;
  }

  return (
    <>
      <Banner setSearchTerm={setSearchTerm} />
      <CardSection data={data} page={page} setPage={setPage} />
    </>
  );
};

export default Home;
