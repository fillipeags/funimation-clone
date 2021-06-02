import React from 'react';
import CardsList from '../../components/AnimeCards/CardsList';
import Bottom from '../../components/Bottom/Bottom';
import Cta from '../../components/CTA/Cta';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Cta />
      <CardsList />
      <Bottom />
      <Footer />
    </>
  );
};

export default Home;
