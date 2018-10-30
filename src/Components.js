import React, { Component } from 'react'

export class BottomBar extends Component {
	render() {
		return (
			<div className="bottom-bar">
				<p>node.js</p>
				<p>git</p>
				<p>ubuntu</p>
			</div>
		)
	}
}

export class CodePane extends Component {
	constructor(props) {
		super(props)

		this.state = {
			current: 0,
			age: ((Date.now() - 973152000000) / 1000 / 60 / 60 / 24 / 365).toFixed(8)
		}
	}

	async componentDidMount() {
		setInterval(() => {
			this.setState({
				age: ((Date.now() - 973152000000) / 1000 / 60 / 60 / 24 / 365).toFixed(
					8
				)
			})
		}, 100)
	}

	render() {
		const homePageLines = [
			<span>{'var terrance = new Developer({'}</span>,
			<span>{'\n\u00A0\u00A0age: ' + this.state.age + ','}</span>,
			<span>{"\n\u00A0\u00A0email: 'tyli@uw.edu',"}</span>,
			<span>{"\n\u00A0\u00A0location: 'Seattle'"}</span>,
			<span>{'\n})'}</span>
		]

		return <p className="code">{homePageLines}</p>
	}
}
