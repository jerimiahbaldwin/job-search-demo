import React, {useState, useEffect} from 'react'
import Jobs from '../../components/jobs';
import Profile from '../../components/profile';
import API from '../../services/API';

function Home(){
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
      <a href="/admin" className="btn btn-lg btn-success mr-5">Admin Site</a>
      <a href="/fancy" className="btn btn-lg btn-success ml-5">Fancy Site</a>
      <Profile onUpdate={handleUpdateProfile} {...data} />
      <Jobs {...data} />
    </main>
  )
}

export default Home