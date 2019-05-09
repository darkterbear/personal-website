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
                <Card title={'test'}>lorem ipsum dolor sit amet</Card>
              </div>
              <div class='col-sm mb-3'>
                <Card title={'test'}>lorem ipsum dolor sit amet</Card>
              </div>
              <div class='col-sm mb-3'>
                <Card title={'test'}>lorem ipsum dolor sit amet</Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
