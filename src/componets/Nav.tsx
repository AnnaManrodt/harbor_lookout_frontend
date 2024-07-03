import { Link } from 'react-router-dom';

export default function NavTags() {

    return (
        <>
        <div>
            <nav>
                <ul>
                    <li>
                    <Link to="/ships">Ships</Link>
                    </li>
                    <li>
                    <Link to="/map">Map</Link>
                    </li>
                    <li>
                    <Link to="/settings">Settings</Link>
                    </li>
                    <li>
                    <Link to="/about">About</Link>
                    </li>
                    <li>
                    <a href="https://www.lsmma.com/" target="_blank" rel="noopener noreferrer">LSMMA</a>
                    </li>
                </ul>
            </nav>
        </div>
        </>

        // this page will include mostly the same content as before some info a place to sign up as a member 
    )
}