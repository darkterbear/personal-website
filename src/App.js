import React from 'react'

export default class App extends React.Component {
  render() {
    return (
      <div class='content'>
        <div class='page'>
          <div class='top'>
            <h1>terrance li</h1>
          </div>
          <div class='page-content'>
            <h2>Hey, I'm Terrance! I design and create web apps :)</h2>
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
          <h1>experience</h1>
          <div class='container-fluid'>
            <div class='row'>
              <div class='col-sm'>test</div>
              <div class='col-sm'>test</div>
              <div class='col-sm'>test</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
