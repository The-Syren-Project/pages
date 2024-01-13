import { Outlet } from 'react-router';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import './styles/template.scss';

/**
 *
 * @returns
 */
export default function RouteTemplate() {
    return <>
        <Header />

        <main>
            <Outlet />
        </main>

        <Footer />
    </>;
}