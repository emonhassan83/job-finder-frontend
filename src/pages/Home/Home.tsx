import { useState } from 'react';
import Banner from '../../components/ui/Banner';
import CardSection from '../../components/ui/CardSection';
import { useGetAllCardsQuery } from '../../redux/features/cardApi';
import FullPageLoading from '../../components/shared/Loader';

const Home = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const { data, isLoading } = useGetAllCardsQuery([{ name: "searchTerm", value: searchTerm }]);

    if (isLoading) {
        return <FullPageLoading/>
    }
    
    return (
        <>
           <Banner setSearchTerm={setSearchTerm}/>
           <CardSection cards={data?.data}/>
        </>
    );
};

export default Home;