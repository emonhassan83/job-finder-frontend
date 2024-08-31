import { useGetAllApplicationsQuery } from "../../redux/features/applicationApi";

const AllApplications = () => {
    const {data} = useGetAllApplicationsQuery([]);
    console.log(data);
    
    return (
        <div>
            all application page
        </div>
    );
};

export default AllApplications;