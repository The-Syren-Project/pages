import { Link, Outlet } from 'react-router-dom';
import './App.css'

export default function App() {
    return <main>
        <div>
            <Link to="/">Home</Link>
            <Link to="/lore">Lore</Link>
            <Link to="/socials">Socials</Link>
        </div>

        <div>
            <Outlet />
        </div>
    </main>
}