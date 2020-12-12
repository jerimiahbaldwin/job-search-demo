import axios from 'axios'

function API (){}

API.fetchJobMatchData = function(){
  let promises = []

  let results = {}
  
  promises.push(
    axios.post('/api/reports/candidate-job-match', {candidateId: 1})
    .then(response => results.candidateJobMatchReport = response.data)
  )

  promises.push(
    axios('/api/candidates/1')
    .then(response => results.candidate = response.data)
  )

  promises.push(
    axios('/api/skills')
    .then(response => results.skills = response.data)
  )

  return Promise.all(promises)
  .then(() => results)

}

API.fetchJobData = function(){
  return axios('/api/jobs')
  .then(response => response.data)
}

export default API