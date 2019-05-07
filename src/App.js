import React from 'react'

export default class App extends React.Component {
  render() {
    return (
      <div class='content'>
        <div class='page'>
          <div class='top'>
            <h1>terrance li</h1>
            <ul>
              <li>experience</li>
              <li>projects</li>
              <li>resume</li>
            </ul>
          </div>
          <div class='page-content'>
            <h2>Hey, I'm Terrance! I design and create web apps :)</h2>
          </div>
          <div class='footer'>
            <h4>
              <a
                href='https://www.linkedin.com/in/terrance-li/'
                target='_blank'
              >
                linkedin
              </a>
              : terrance-li{' '}
              <a href='https://github.com/darkterbear' target='_blank'>
                github
              </a>
              : darkterbear <a href='mailto:tyli@uw.edu'>email</a>: tyli@uw.edu
            </h4>
          </div>
        </div>
      </div>
    )
  }
}
