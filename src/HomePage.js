import React, { Component } from 'react'
import { BottomBar, CodePane, Logo } from './Components'

const sleep = ms => {
	return new Promise(resolve => setTimeout(resolve, ms))
}

export default class HomePage extends Component {
	constructor(props) {
		super(props)

		this.state = {
			text: '|',
			current: -1,
			target: -1,
			codePaneExpanded: false
		}

		this.codePane = React.createRef()
	}

	async componentDidMount() {
		// handle blinking cursor
		setInterval(() => {
			const current = this.state.text

			if (current.charAt(current.length - 1) == '|') {
				this.setState({
					text: current.substring(0, current.length - 1) + '\u00a0'
				})
			} else {
				this.setState({
					text: current.substring(0, current.length - 1) + '|'
				})
			}
		}, 500)

		// loop to type/delete characters to match target
		setInterval(() => {
			const current = this.state.text
			const target = this.state.target

			if (!isNaN(target)) return

			// if theyre the same string don't do anything
			if (current.substring(0, current.length - 1) == target) {
				// if (target == 'terrance\u00a0li') {
				// 	this.setState({ codePaneExpanded: false })
				// } else {
				// 	this.setState({ codePaneExpanded: true })
				// }

				return
			}

			// if current is longer than target ya kinda hafta delete
			if (current.length > target.length) {
				this.setState({
					text:
						current.slice(0, current.length - 2) +
						current.slice(current.length - 1, current.length)
				})
			} else {
				// check if current is the leading substring of target
				if (
					current.substring(0, current.length - 1) ==
					target.substring(0, current.length - 1)
				) {
					// if so, type next character
					this.setState({
						text:
							current.slice(0, current.length - 1) +
							target.charAt(current.length - 1) +
							current.slice(current.length - 1)
					})
				} else {
					// if not, delete a character
					this.setState({
						text:
							current.slice(0, current.length - 2) +
							current.slice(current.length - 1, current.length)
					})
				}
			}
		}, 50)

		await sleep(1000)
		this.setState({ target: 'terrance\u00a0li' })
	}

	handlePageSelect = async page => {
		if (this.state.current === page) return
		const target = (page => {
			switch (page) {
				case -1:
					return 'terrance\u00a0li'
				case 0:
					return 'bio'
				case 1:
					return 'experience'
				case 2:
					return 'honors'
			}
		})(page)

		if (page == -1) {
			this.setState({ codePaneExpanded: false })
		} else {
			this.setState({ codePaneExpanded: true })
			this.codePane.current.clearCode()
		}

		this.setState({ current: page, target })
	}

	render() {
		return (
			<div className="content">
				<Logo
					onClick={() => {
						this.handlePageSelect(-1)
					}}
				/>
				<div className="center">
					<h1>{this.state.text}</h1>
				</div>
				<CodePane
					ref={this.codePane}
					current={this.state.current}
					expanded={this.state.codePaneExpanded}
				/>
				<BottomBar onClick={this.handlePageSelect} />
			</div>
		)
	}
}
