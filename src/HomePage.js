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
			blinking: true,
			deleting: false
		}
	}

	async componentDidMount() {
		// handle blinking cursor
		setInterval(() => {
			const current = this.state.text

			if (current.charAt(current.length - 1) == '|' || !this.state.blinking) {
				this.setState({
					text: current.substring(0, current.length - 1) + '\u00a0'
				})
			} else {
				this.setState({
					text: current.substring(0, current.length - 1) + '|'
				})
			}
		}, 500)

		await sleep(1000)
		this.typeText('terrance\u00a0li')
	}

	removeText = async () => {
		this.setState({ deleting: true })
		await sleep(100)

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

	typeText = async target => {
		this.setState({ target: target })
		if (this.state.text.length > 1) await this.removeText()
		await sleep(500)

		this.setState({ deleting: false })
		const text = this.state.target
		for (var i = 0; i < text.length; i++) {
			this.setState({
				text:
					this.state.text.slice(0, i) +
					text.charAt(i) +
					this.state.text.slice(i)
			})
			if (this.state.deleting) break
			await sleep(Math.random() * 100 + 50)
		}
	}

	handlePageSelect = async page => {
		if (this.state.current === page) return
		this.setState({ current: page, blinking: true })
		switch (page) {
			case 0:
				if (this.state.deleting) {
					this.setState({ target: 'bio' })
				} else {
					await this.typeText('bio')
				}

				break
			case 1:
				if (this.state.deleting) {
					this.setState({ target: 'experience' })
				} else {
					await this.typeText('experience')
				}
				break
			case 2:
				if (this.state.deleting) {
					this.setState({ target: 'honors' })
				} else {
					await this.typeText('honors')
				}
				break
			case 3:
				if (this.state.deleting) {
					this.setState({ target: 'portfolio' })
				} else {
					await this.typeText('portfolio')
				}
		}
		this.setState({ blinking: false })
	}

	handleSelectHome = async () => {
		if (this.state.current === -1) return
		this.setState({ current: -1, blinking: true })
		await this.typeText('terrance li')
	}

	render() {
		return (
			<div className="content">
				<Logo onClick={this.handleSelectHome} />
				<div className="center">
					<h1>{this.state.text}</h1>
				</div>
				<BottomBar onClick={this.handlePageSelect} />
			</div>
		)
	}
}
