import React, { Component } from 'react'

export class BottomBar extends Component {
	render() {
		return (
			<div className="bottom-bar">
				<a>experience</a>
				<a>honors</a>
				<a>portfolio</a>
			</div>
		)
	}
}

var years = (Date.now() - 973152000000) / 1000 / 60 / 60 / 24 / 365
years -= Math.floor(years / 4) / 365

const homePageLines = [
	<span>{'var terrance = new Developer({'}</span>,
	<span>{'\n\u00A0\u00A0age: ' + years.toFixed(8) + ','}</span>,
	<span>{"\n\u00A0\u00A0email: 'tyli@uw.edu',"}</span>,
	<span>{"\n\u00A0\u00A0location: 'Seattle'"}</span>,
	<span>{'\n})\n\n'}</span>,
	<span>{"terrance.github = 'darkterbear'\n"}</span>,
	<span>{"terrance.linkedin = 'terrance-li'\n\n"}</span>,
	<span>{'terrance.resume = new Resume({'}</span>,
	<span>{'\n\u00A0\u00A0terrance.experience,'}</span>,
	<span>{'\n\u00A0\u00A0terrance.honors,'}</span>,
	<span>{'\n\u00A0\u00A0terrance.projects'}</span>,
	<span>{'\n})'}</span>
]

export class CodePane extends Component {
	constructor(props) {
		super(props)

		this.state = {
			current: 0,
			currentContent: null
		}
	}

	render() {
		return (
			<p className="code">
				{this.state.currentContent ? this.state.currentContent : ''}
			</p>
		)
	}
}
