import React from 'react'
import { Card } from './Components'

export default class App extends React.Component {
  render() {
    return (
      <div class='content'>
        <div class='page'>
          <div class='container'>
            <div class='page-content'>
              <h1>terrance li</h1>
              <h2>Hey, I'm Terrance! I design and create web apps :)</h2>
            </div>
          </div>

          <div class='footer'>
            <ul>
              <li>
                <a
                  href='https://www.linkedin.com/in/terrance-li/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  linkedin
                </a>
                : terrance-li
              </li>
              <li>
                <a
                  href='https://github.com/darkterbear'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  github
                </a>
                : darkterbear
              </li>
              <li>
                <a href='mailto:tyli@uw.edu'>email</a>: tyli@uw.edu
              </li>
            </ul>
          </div>
        </div>
        <div class='page'>
          <div class='container'>
            <h1>experience</h1>
            <div class='row'>
              <div class='col-sm mb-3'>
                <Card title={'Lead Android Dev.'}>
                  At <b>aspace Inc.</b>, I developed an Android codebase with
                  the Android SDK using Java and XML, implementing in-house APIs
                  and UI designs.
                </Card>
              </div>
              <div class='col-sm mb-3'>
                <Card title={'Research Assistant'}>
                  At the <b>University of Washington CSE Department’s Syslab</b>
                  , I crafted data visualizations and front-end demos for
                  systems software projects using D3.js.
                </Card>
              </div>
              <div class='col-sm mb-3'>
                <Card title={'Volunteer Mentor'}>
                  At <b>StudentRND CodeDay</b>, I volunteer as a mentor,
                  teaching students the basics of computer science while
                  cultivating passion for technology.
                </Card>
              </div>
            </div>
          </div>
        </div>
        <div class='page'>
          <div class='container'>
            <h1>projects</h1>
            <div class='row'>
              <div class='col mb-3'>
                <Card title={'Odd'}>
                  A gamified approach to financial education. Won{' '}
                  <b>2nd place</b> for Best Use of Even API at{' '}
                  <b>DefHacks Seattle</b>, 2019.
                </Card>
              </div>
              <div class='col mb-3'>
                <Card title={'Gradebook'}>
                  A student-led project to craft a more insightful gradebook
                  frontend for our school district.
                </Card>
              </div>
              <div class='col mb-3'>
                <Card title={'Newport Math Club'}>
                  Personal project to overhaul Newport Math Club’s web platform,
                  a production web app handling hundreds of requests daily.
                </Card>
              </div>
              <div class='w-100' />
              <div class='col mb-3'>
                <Card title={'Hearts'}>
                  Personal project: recreate the card game “hearts” online using
                  a Socket.io API. Check it out at{' '}
                  <a href='https://hearts.terranceli.com'>
                    hearts.terranceli.com
                  </a>
                  !
                </Card>
              </div>
              <div class='col mb-3'>
                <Card title={'Check.io'}>
                  Hackathon project for <b>T-Mobile Hacksgiving</b>. A B2B
                  platform for restaurants for seamless transaction handling.
                </Card>
              </div>
              <div class='col mb-3'>
                <Card title={'Quizteam'}>
                  Hackathon project for <b>T-Mobile CodeDay</b>. A quiz-game
                  designed to build teamwork skills, inspired by Quizlet and
                  Spaceteam.
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
