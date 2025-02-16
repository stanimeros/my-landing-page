import { Link } from "react-router-dom";

function Header() {
  return (
    <header className='row mobile-column'>
      <img
				src={`/images/logo-white.png`}
				alt='logo'
				width={75}
			/>
			<ul className='row'>
				<li>
					<Link className='link' to="/">
						Home
					</Link>
				</li>
				<div>|</div>
				<li>
					<Link className='link' to="https://github.com/stanimeros" target="_blank">
						GitHub
					</Link>
				</li>
				<div>|</div>
				<li>
					<Link className='link' to="/portfolio">
						Portfolio
					</Link>
				</li>
				<div>|</div>
				<li>
					<Link className='link' to="/contact">
						Contact
					</Link>
				</li>
			</ul>
			<Link className="button" to="/contact">
				Get Started
			</Link>
    </header>
  )
}

export default Header
