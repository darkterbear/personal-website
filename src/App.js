import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './HomePage'

export default class App extends React.Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route component={HomePage} />
				</Switch>
			</Router>
		)
	}
}
