import React from 'react'

// styles
import './Home.scss'

// assets
import logo from '../assets/logo.svg'

const Home: React.FC = () => {
	return (
		<div className="home">
			<img className="logo" src={logo} alt="react logo" />

			<h1>React iTunes App</h1>

			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
				optio, similique laborum maxime quam facilis? Ipsam facilis
				assumenda laboriosam vero velit earum, aperiam, facere minus, eos
				eum nesciunt iusto quia?
			</p>
		</div>
	)
}

export default Home
