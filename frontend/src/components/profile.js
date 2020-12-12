import React, {useState} from 'react'
import axios from 'axios'

export default function Profile({onUpdate, candidate, skills}){
  let [selectedSkillId, setSelectedSkillId] = useState()
  let skillLevels = new Array(6).fill(true)
  let onChangeSelectedSkillId = e => setSelectedSkillId(e.target.value)

  let updateSkill = (skill, i) => e => {
    axios.put('/api/candidates/1/skills/' + skill.id, {
      competence_level: i 
    })
    .then(onUpdate)
  }

  let onClickAddSkill = e => {
    axios.post('/api/candidates/1/skills', {
      skillId: selectedSkillId,
      competenceLevel: 3,
    })
    .then(onUpdate)
  }

  let onClickDeleteSkill = (candidate, skill) => e => {
    axios.delete(`/api/candidates/${candidate.id}/skills/${skill.id}`)
    .then(onUpdate)
  }

  if (!candidate || !skills) return "Loading..."

  // Get a list of the skill ids associated with the candidate.
  let candidateSkillIds = (candidate.skills || []).map(o => o.id)

  // Remove skills that are already associated with the candidate.
  skills = skills.filter(o => !candidateSkillIds.includes(o.id))
  
  // Sort the remaining skils alphabetically
  let skillSort = (a, b) => a.key > b.key ? 1 : a.key < b.key ? -1 : 0
  skills = skills.sort(skillSort)

  // Sort the candidate skills.
  let candidateSkills = candidate.skills && candidate.skills.sort(skillSort)

  return  (
        <section id="profile" className="portfolio">
        <div className="container">

          <div className="section-title" data-aos="fade-up">
            <h2>Profile</h2>
            <p>Magnam dolores commodi suscipit eius consequatur ex aliquid fuga eum quidem</p>
          </div>
          <div className="row">
            <div className="col text-right">
              <span>Add more skills:</span>
              <select type="select" onChange={onChangeSelectedSkillId}>
                <option></option>
                {skills.map(skill => {
                  return (
                    <option key={skill.id} value={skill.id}>{skill.name}</option>
                  )
                })}
                
              </select>
              <button onClick={onClickAddSkill} className="btn btn-info">Add</button>
            </div>
          </div>
          {candidateSkills && (
            <table className="table">
              <tbody>
                <tr>
                  <td className="text-right">No Experience</td>
                  {skillLevels.map((v, i) => (
                    <td key={i}>{i}</td>
                  ))}
                  <td className="text-left">Expert</td>
                </tr>
              </tbody>
              {candidateSkills.map(skill => {
                return (
                  <tbody key={skill.id}>
                    <tr>
                      <td className="text-left">{skill.name}</td>
                      {skillLevels.map((v, i) => (
                        <td key={i}>
                          <input type="radio" 
                          name={"skill_" + skill.id} 
                          onChange={updateSkill(skill, i)} 
                          defaultChecked={skill.pivot.competence_level === i}
                          value={i}></input>
                        </td>
                      ))}
                      <td className="text-right">
                        <button className="btn btn-sm btn-danger" onClick={onClickDeleteSkill(candidate, skill)}>Delete</button>
                      </td>
                    </tr>
                  </tbody>
                )
              })}
              
            </table>
          ) || (
            <div>Setup some skills!</div>
          )}


        </div>
      </section>


    )
}