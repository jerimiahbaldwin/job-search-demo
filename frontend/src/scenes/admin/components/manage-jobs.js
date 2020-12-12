import React, {useState, useEffect} from 'react';
import API from '../../../services/API';
import axios from 'axios';

function ManageJobs(){
  let [data, setData] = useState()
  let [refreshKey, setRefreshKey] = useState(0)

  let fetchData = () => {
    return API.fetchJobData()
    .then(data => setData(data))
  }

  let updateImportanceLevel = (job, skill, v) => e => {
    axios.put(`/api/jobs/${job.id}/skills/${skill.id}`, {
      importance_level: v
    })
  }


  useEffect(() => {
    if (refreshKey ===0 ){
      fetchData()
      
    }
  }, [refreshKey])

  let importanceLevels = [
    {name: "Preferred", value: .2},
    {name: "Standard", value: 1.00}, 
    {name: "Essential", value: 1.6},
  ]

  return (
    <div>
      <h1 className="mb-3">Manage Jobs</h1>
      <div className="container">
        <div className="row justify-content-center"> 
          <div className="col col-lg-8">
            <table className="table">
            {data != undefined && data.map(job => (
              <tbody key={job.id}>
                <tr>
                  <td colSpan="2" className="text-left">{job.title} - {job.company}</td>
                  {importanceLevels.map((o, i) => (
                    <td>{o.name}</td>
                  ))}
                </tr>
                {job.skills.map(skill => (
                  <tr key={skill.id}>
                    <td></td>
                    <td className="text-right">{skill.name}</td>
                    {importanceLevels.map((o, i) => (
                      <td key={i}>
                        <input type="radio" 
                        name={`skillImportanceLevel_${job.id}_${skill.id}`} 
                        onChange={updateImportanceLevel(job, skill, o.value)}
                        defaultChecked={skill.pivot.importance_level === o.value}
                        value={o.value}></input>
                      </td>

                    ))}
                  </tr>
                ))}
              </tbody>
            ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ManageJobs