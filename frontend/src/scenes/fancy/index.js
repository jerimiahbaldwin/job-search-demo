import React, {useState, useEffect} from 'react'

import Jobs from '../../components/jobs';
import Profile from '../../components/profile';

import Header from './components/header';
import Footer from './components/footer';
import Banner from './components/banner';
import AboutUs from './components/about';
import ContactUs from './components/contact';
import Pricing from './components/pricing';
import Portfolio from './components/portfolio';
import Team from './components/team';
import Featured from './components/featured';
import Specials from './components/specials';
import Why from './components/why';
import Testimonials from './components/testimonials';
import Clients from './components/clients';
import Faq from './components/faq';
import API from '../../services/API';

function Fancy(){
  let [data, setData] = useState()
  let [refreshKey, setRefreshKey] = useState(0)

  let fetchData = () => {
    return API.fetchJobMatchData()
    .then(data => setData(data))
  }
  
  let handleUpdateProfile = () => {
    fetchData()
    .then(() => setRefreshKey(refreshKey + 1))
  }

  useEffect(() => {
    if (refreshKey ===0 ){
      fetchData()
    }
  }, [refreshKey])

  return (
    <main id="main">
      <Banner />
      <Header />
      <AboutUs />
      <Jobs {...data} />
      <Specials />
      <Featured />
      <Profile onUpdate={handleUpdateProfile} {...data} />
      <Portfolio />
      <Why />
      <Testimonials />
      <Clients />
      <Team />
      <Pricing />
      <Faq />
      <ContactUs />
      <Footer />
      <a href="/#" className="back-to-top"><i className="icofont-simple-up"></i></a>
    </main>
  )
}

export default Fancy