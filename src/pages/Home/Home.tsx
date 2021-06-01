import CardsList from '../../components/AnimeCards/CardsList';
import Cta from '../../components/CTA/Cta';
import Header from '../../components/Header/Header';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Cta />
      <CardsList />
    </>
  );
};

export default Home;
