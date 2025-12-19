import './app.scss'
import { Link, Outlet } from 'react-router-dom';
import { themes } from '@syren-dev-tech/confetti/themes';
import { useEffect } from 'react';
import { Page, PageBody, PageHeader } from '@syren-dev-tech/confects/containers';

export default function App() {

    useEffect(() => { themes.init('dark', 'india') }, []);

    return <Page>
        <PageHeader>
            <Link to="/">
                <img src="/icon.png" alt="Icon" className="icon-png" />
            </Link>
            <Link to="/lore">Lore</Link>
            <Link to="/socials">Socials</Link>
        </PageHeader>

        <PageBody>
            <Outlet />
        </PageBody>
    </Page>
}