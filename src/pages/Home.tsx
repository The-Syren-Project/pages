import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
    return <div className="home-container">
        <title>Vellumsire | Home</title>
        <img src="/banner.png" alt="Banner" className="banner" />
        <div className="tiles">
            <Link to="/lore" className="tile">Lore</Link>
            <Link to="/socials" className="tile">Socials</Link>
        </div>
    </div>;
};