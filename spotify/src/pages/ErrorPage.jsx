import { Link } from 'react-router-dom'
import logo from '/assets/spotify-icon.png'
import './ErrorPage.css'

export default function ErrorPage() {
    return (
        <div className="errorpage">
            <img src={logo} alt="Logo" />
            <h1>Page Not Found</h1>
            <p>We couldn't find page.</p>
            <Link to="/home" className="homebutton">
                <button>Home</button>
            </Link>
            <a href="https://support.spotify.com">Help</a>
        </div>
    )
}
