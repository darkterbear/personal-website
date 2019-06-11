import React from 'react'
import { Card } from './Components'

const getYear = () => {
	const now = new Date()
	const years = now.getUTCFullYear() - 2000
	const months = now.getUTCMonth() - 10
	const days = now.getUTCDate() - 2
	const hours = now.getUTCHours()
	const minutes = now.getUTCMinutes()
	const seconds = now.getUTCSeconds()

	return (
		years +
		months / 12 +
		days / 365 +
		hours / (365 * 24) +
		minutes / (365 * 24 * 60) +
		seconds / (365 * 24 * 60 * 60)
	).toFixed(8)
}

export default class App extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			age: getYear()
		}
	}

	componentDidMount() {
		this.interval = setInterval(() => {
			this.setState({
				age: getYear()
			})
		})
	}

	componentWillUnmount() {
		clearInterval(this.interval)
	}

	render() {
		return (
			<div class="content">
				<div class="page">
					<div class="container">
						<div class="page-content">
							<h1>terrance li</h1>
							<h2>Hey, I'm Terrance! I design and create web apps :)</h2>
						</div>
					</div>

					<div class="footer">
						<ul>
							<li>
								<a
									href="https://www.linkedin.com/in/terrance-li/"
									target="_blank"
									rel="noopener noreferrer">
									linkedin
								</a>
							</li>
							<li>
								<a
									href="https://github.com/darkterbear"
									target="_blank"
									rel="noopener noreferrer">
									github
								</a>
							</li>
							<li>
								<a href="mailto:tyli@berkeley.edu">email</a>
							</li>
							<li>
								<a href="https://terrance.sfo2.digitaloceanspaces.com/resume.pdf">
									resume
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div class="page">
					<div class="container">
						<h1>experience</h1>
						<h4>
							I may only be {this.state.age} years old, but I’ve got some
							experience under my belt.
						</h4>
						<div class="row">
							<div class="col-sm mb-3">
								<Card title={'Lead Android Dev.'}>
									At <b>aspace Inc.</b>, I developed an Android codebase with
									the Android SDK using Java and XML, implementing in-house APIs
									and UI designs.
								</Card>
							</div>
							<div class="col-sm mb-3">
								<Card title={'Research Assistant'}>
									At the <b>University of Washington CSE Department’s Syslab</b>
									, I crafted data visualizations and front-end demos for
									systems software projects using D3.js.
								</Card>
							</div>
						</div>
					</div>
				</div>
				<div class="page">
					<div class="container">
						<h1>projects</h1>
						<h4>I've been busy!</h4>
						<div class="row">
							<div class="col mb-3">
								<Card
									title={'Odd'}
									link={'https://github.com/dotTechnopath/odd'}>
									A gamified approach to financial education. Won{' '}
									<b>2nd place</b> for Best Use of Even API at{' '}
									<b>DefHacks Seattle</b>, 2019.
								</Card>
							</div>
							<div class="col mb-3">
								<Card
									title={'Gradebook'}
									link={'https://github.com/team-llambda/gradebook-web'}>
									A student-led project to craft a more insightful gradebook
									frontend for our school district.
								</Card>
							</div>
							<div class="col mb-3">
								<Card
									title={'Newport Math Club'}
									link={'https://github.com/newport-math-club/web-platform'}>
									Personal project to overhaul Newport Math Club’s web platform,
									a production web app handling hundreds of requests daily.
								</Card>
							</div>
						</div>
					</div>
				</div>
				<div class="page">
					<div class="container">
						<h1>skills</h1>
						<h4>Fear not, I know my $@*#</h4>
						<div class="row">
							<div class="col mb-3">
								<Card title={'JavaScript/Node.js'}>
									3 years of experience building full-stack personal, team, and
									research projects with React.js, Express.js, and D3.js. All
									projects shown above use JS, and is currently my primary
									language.
								</Card>
							</div>
							<div class="col mb-3">
								<Card title={'React.js'}>
									2 years of experience in various hackathon projects and the
									Newport Math Club web platform described above. This website
									is built with React!
								</Card>
							</div>
							<div class="col mb-3">
								<Card title={'Express.js'}>
									2 years of experience in various hackathon projects in various
									hackathon projects, also used to build the Newport Math Club
									platform. Would have used it on this website if I had a
									chance.
								</Card>
							</div>
							<div class="w-100" />
							<div class="col mb-3">
								<Card title={'Git'}>
									Collaborated with many teams using Git, well-versed in its
									common usage, including branching, stashing, and merging. Used
									in most all of my projects, just check out my GitHub above :)
								</Card>
							</div>
							<div class="col mb-3">
								<Card title={'MongoDB'}>
									2 years of experience in various hackathon projects, used in
									production in Newport Math Club (yet again). Well-versed in
									basic usage and interface with Node.js using Mongoose.
								</Card>
							</div>
						</div>
					</div>
				</div>
				<div class="page">
					<div class="container">
						<h1>education</h1>
						<h4>For what it's worth</h4>
						<div class="row">
							<div class="col mb-3">
								<Card title={'UC Berkeley EECS'}>
									Incoming freshman to the class of 2023.
								</Card>
							</div>
							<div class="w-100" />
							<div class="col mb-3">
								<Card title={'Newport High School'}>
									Graduating senior from Bellevue, Washington with a 4.0 GPA :)
									President of Newport Math Club, Tournament Director of the
									Knights of Pi Math Tournament, member of the Newport
									Philharmonic and Chamber Orchestra, and manager of the Newport
									Girls Badminton team.
								</Card>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
