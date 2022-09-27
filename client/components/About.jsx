import React from 'react'

function About() {
  return (
    <>
      <h2 className="about-h2">About the Team</h2>
      <div className="about-container">
        <img
          className="about-team-img"
          src="/images/team.jpeg"
          alt="Team shot"
        />

        <div className="about-text">
          <p>
            Hi all, welcome to FameGreak we are a small team of full stack
            developers and this our final project for Dev-Academy. Meet the
            team.
          </p>
        </div>
      </div>
      <div className="about-card">
        <div className="about-wapper">
          <a href="https://www.linkedin.com/in/jeff-mcnie-691797246/">
            <img
              className="about-heat-shot"
              src="/images/Jeff-head-shot-03.jpeg"
              alt="jeff head proflic"
            />
          </a>
          <h2>Jeff - Scrum Lead</h2>
        </div>
        <div className="about-wapper">
          <img
            className="about-heat-shot"
            src="/images/Ryan-head-shot-02.jpeg"
            alt="ryan head proflic"
          />
          <h2>Ryan - Product Owner</h2>
          <p>
            Hello there, as Product Owner I drove us 
            towards making sure our MVP was 
            achieved. Other code responsibilities I had 
            during this project were setting 
            up components, styling pages,  
            research and working with others on the  
            battle system we created.
          </p>
        </div>
        <div className="about-wapper">
          <img
            className="about-heat-shot"
            src="/images/Jordan-head-shot-05.jpeg"
            alt="jordan head proflic"
          />
          <h2>Jordan - Git Keeper</h2>
        </div>
        <div className="about-wapper">
          <img
            className="about-heat-shot"
            src="/images/Kris-head-shot-01.jpeg"
            alt="kris head proflic"
          />
          <h2>Kris - Vibes Watcher</h2>
          <p>
            Hey there, is your local trash gremlin and Vides watcher. As the
            vides watcher, my goal is to make sure that the team energy and
            spirit are high. by doing regular check-ins and having stress,
            profile i can keep an eye out for team member stress and then act
            according to their tips on how to them.
          </p>
        </div>
        <div className="about-wapper">
          <img
            className="about-heat-shot"
            src="/images/Ming-head-shot-04.jpeg"
            alt="ming head proflic"
          />
          <h2>Ming - Fungineer</h2>
        </div>
      </div>
    </>
  )
}

export default About
