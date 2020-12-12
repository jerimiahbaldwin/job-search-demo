import React from 'react'

export default function Jobs({candidateJobMatchReport}) {
  if (!candidateJobMatchReport) return "Loading..."

  let {jobs, matchStrengths} = candidateJobMatchReport
  let jobSort = matchStrengths => (a, b) => {
    if (matchStrengths[a.id] > matchStrengths[b.id]) {
      return -1
    } else if (matchStrengths[b.id] > matchStrengths[a.id]) {
      return 1
    } else {
      return 0
    }
  }

  
  jobs = jobs.sort(jobSort(matchStrengths))

  return (
    <section id="jobs" className="services">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
            <h2>Jobs</h2>
            <p>Magnam dolores commodi suscipit eius consequatur ex aliquid fuga eum quidem</p>
        </div>
        {jobs.map(job => {
          let skillSort = (a, b) => {
            if (a.pivot.importance_level > b.pivot.importance_level) {
              return -1
            } else if (b.pivot.importance_level > a.pivot.importance_level) {
              return 1
            } else if (a.name > b.name) {
              return 1
            } else if (b.name > a.name) {
              return -1
            } else {
              return 0
            }
          }
          let skills = job.skills.sort(skillSort)
          let displayMatchStrength = (matchStrengths[job.id]*100.0).toFixed(0) + '% match'
          return (
            <div className="row" key={job.id}>
              <div className="col">
                <div className="card job-card">
                  <div className="card-header text-left">
                    <h3 className="card-title">{job.title} - {displayMatchStrength}</h3>
                  </div>
                  <div className="card-body text-left">
                    <h6>{job.company} - Denver, Colorado, USA</h6>
                    Skills Required:
                    <ul>
                      {skills.map(skill => {
                        let displayName = skill.name
                        if (skill.pivot.importance_level > 1) {
                          displayName += ' (essential)'
                        } else if (skill.pivot.importance_level < 1) {
                          displayName += ' (preferred)'
                        }
                        return (
                          <li key={skill.id}>{displayName}</li>
                        )
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            )
        })}
      </div>
    </section>
  )
}
