import React, { useState } from 'react'
import Header from '../header/header';
import TabOption from '../components';
import Footer from '../footer';
import Delivery from '../components/delivery/Delivery';
import DiningOut from '../components/diningOut/DiningOut';
import Nightlife from '../components/nightLife/Nightlife';



const getCorrectScreen =(tab) =>{

  switch(tab){
    case "Delivery":
      return <Delivery/>;
    
    case "Dining Out":
      return <DiningOut/>
      
    case "NightLife":
      return <Nightlife/>;

    default:
      return <Delivery />;
  }
}

const Home = () => {
    const [activeTab, setActiveTab] = React.useState("Delivery");
  return (
    <div>
        <Header/>
        <TabOption activeTab={activeTab} setActiveTab={setActiveTab}/>
        {getCorrectScreen(activeTab)}
        <Footer/>
    </div>
  )
}

export default Home;