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
			current: -1
		}
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

		this.typeText('terrance li')
	}

	removeText = async () => {
		await sleep(500)

		var before = this.state.text
		for (var i = 0; i < before.length - 1; i++) {
			this.setState({
				text:
					this.state.text.slice(0, this.state.text.length - 2) +
					this.state.text.slice(
						this.state.text.length - 1,
						this.state.text.length
					)
			})
			await sleep(50)
		}
	}

	typeText = async text => {
		if (this.state.text.length > 1) await this.removeText()

		await sleep(100)

		for (var i = 0; i < text.length; i++) {
			this.setState({
				text:
					this.state.text.slice(0, i) +
					text.charAt(i) +
					this.state.text.slice(i)
			})
			await sleep(Math.random() * 100 + 50)
		}
	}

	handlePageSelect = page => {
		if (this.state.current === page) return
		this.setState({ current: page })
		switch (page) {
			case 0:
				this.typeText('bio')
				break
			case 1:
				this.typeText('experience')
				break
			case 2:
				this.typeText('honors')
				break
			case 3:
				this.typeText('portfolio')
		}
	}

	render() {
		return (
			<div className="content">
				<Logo />
				<div className="center">
					<h1>{this.state.text}</h1>
				</div>
				<BottomBar onClick={this.handlePageSelect} />
			</div>
		)
	}
}
