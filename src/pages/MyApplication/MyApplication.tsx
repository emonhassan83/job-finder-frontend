import { useGetMyApplicationsQuery } from "../../redux/features/applicationApi";

const MyApplication = () => {
  const {data} = useGetMyApplicationsQuery([]);
  console.log(data);
  

  return (
    <div>
      my application
    </div>
  );
};

export default MyApplication;