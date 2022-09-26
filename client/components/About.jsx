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
            Hi all welcome to FameGreak we are small team of full stack
            developer and this our final project for Dev-Academy. Here meet the
            team.
          </p>
        </div>
      </div>
      <div className="about-card">
        <div>
          <img
            className="about-heat-shot"
            src="/images/Jeff-head-shot-03.jpeg"
            alt="jeff head proflic"
          />
          <h2>Jeff - Scrum Lead</h2>
        </div>
        <div>
          <img
            className="about-heat-shot"
            src="/images/Ryan-head-shot-02.jpeg"
            alt="ryan head proflic"
          />
          <h2>Ryan - Product Owner</h2>
          <p>
            Hello there, as Product Owner I drove us <br />
            towards making sure our MVP was <br />
            achieved. Other code responsibilities I had <br />
            during this project were setting <br />
            up components, styling pages,  <br />
            research and working with others on the  <br />
            battle system we created.<br />
          </p>
        </div>
        <div>
          <img
            className="about-heat-shot"
            src="/images/Jordan-head-shot-05.jpeg"
            alt="jordan head proflic"
          />
          <h2>Jordan - Git Keeper</h2>
        </div>
        <div>
          <img
            className="about-heat-shot"
            src="/images/Kris-head-shot-01.jpeg"
            alt="kris head proflic"
          />
          <h2>Kris - Vibes Watcher</h2>
        </div>
        <div>
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
