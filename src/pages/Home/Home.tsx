import React from 'react';
import CardsList from '../../components/AnimeCards/CardsList';
import Bottom from '../../components/Bottom/Bottom';
import Cta from '../../components/CTA/Cta';
import Header from '../../components/Header/Header';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Cta />
      <CardsList />
      <Bottom />
    </>
  );
};

export default Home;
