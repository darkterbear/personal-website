import React, { Component } from 'react'

export class BottomBar extends Component {
	render() {
		const pages = ['bio', 'experience', 'honors']
		return (
			<div className="bottom-bar">
				{pages.map((text, i) => {
					return <a onClick={() => this.props.onClick(i)}>{text}</a>
				})}
				<a>r&eacute;sum&eacute;</a>
			</div>
		)
	}
}

export class Logo extends Component {
	render() {
		return (
			<svg
				onClick={this.props.onClick}
				className="logo"
				width="64"
				height="64"
				viewBox="0 0 64 64"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M41.0892 61.2762L38.7238 57.1904C36.7168 58.2656 34.2796 58.9824 31.4841 58.9824C26.3232 58.9824 24.2444 56.7603 24.2444 52.6029V30.167H36.5734L37.3619 25.4362H24.2444V16.1894L18.2233 16.9062V25.4362H9.55005V30.167H18.2233V52.6746C18.2233 59.2691 22.8108 64 30.9107 64C34.4947 64 38.4371 62.9965 41.0892 61.2762Z"
					fill="#527AFF"
				/>
				<path
					d="M40.3281 0H22.6948V4.80256H34.307V43.3664C34.307 49.8893 38.8228 53.76 45.489 53.76C49.3598 53.76 52.442 52.8998 54.449 51.8246L52.8721 47.4522C50.7934 48.2406 48.7863 48.7424 46.5642 48.7424C42.9086 48.7424 40.3281 47.3805 40.3281 43.6531V0Z"
					fill="#527AFF"
				/>
			</svg>
		)
	}
}

const getYear = () => {
	const now = new Date()
	const years = now.getUTCFullYear() - 2000
	const months = now.getUTCMonth() - 11
	const days = now.getUTCDate() - 2
	const hours = now.getUTCHours()
	const minutes = now.getUTCMinutes()
	const seconds = now.getUTCSeconds()

	return (
		years +
		months / 12 +
		days / 365.25 +
		hours / (365.25 * 24) +
		minutes / (365.25 * 24 * 60) +
		seconds / (365.25 * 24 * 60 * 60)
	).toFixed(8)
}
export class CodePane extends Component {
	constructor(props) {
		super(props)

		this.state = {
			text: '',
			target: '',
			expanded: false
		}
	}

	componentDidMount() {
		// loop to type/delete characters to match target
		setInterval(() => {
			const current = this.state.text
			const target = this.state.target
			console.log(current + ' ' + target)

			// if (!isNaN(target)) return

			// if theyre the same string don't do anything
			if (current == target) return

			// if current is longer than target ya kinda hafta delete
			if (current.length >= target.length) {
				this.setState({
					text: current.slice(0, current.length - 1)
				})
			} else {
				// check if current is the leading substring of target
				if (current == target.substring(0, current.length)) {
					// if so, type next character
					this.setState({
						text: current + target.charAt(current.length)
					})
				} else {
					// if not, delete a character
					this.setState({
						text: current.slice(0, current.length - 1)
					})
				}
			}
		}, 10)
	}

	componentWillReceiveProps(newProps) {
		const current = newProps.current

		var newText = (function(c) {
			switch (c) {
				case -1:
					return ''
				case 0:
					return (
						'terrance@li:~$ cat bio.txt\n\n' +
						"I'm Terrance, a high school senior with a passion for software development and technology. I am an experienced full-stack developer, despite only being " +
						getYear()
					)
				case 1:
					return (
						'terrance@li:~$ cat experience.txt\n\n' +
						'Volunteer Mentor: CodeDay StudentRND\nBellevue, WA - Nov 2018 to Current\n\n' +
						'Research Assistant: UW CSE Syslab\nSeattle, WA - Jun 2017 to Current\n\n' +
						'Lead Android Developer: aspace, Inc.\nSeattle, WA - May 2017 to Sep 2017\n\n' +
						'Full-stack Web Developer: team llambda\nBellevue, WA - Jul 2018 to Current'
					)
				case 2:
					return 'honors'
			}
		})(current)

		this.setState({ target: newText })
	}

	render() {
		return (
			<div className={'code' + (this.props.expanded ? ' expanded' : '')}>
				{this.state.text}
			</div>
		)
	}
}
