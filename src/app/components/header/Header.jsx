import { env } from "../../env";
import { navRoutes } from "../../routes/routes";
import Nav from "../nav/Nav";

import './styles/header.scss';

/**
 *
 * @returns
 */
export default function Header() {
    return <header>
        <div
            className='banner'
        >
            <img
                src='/images/banner.png'
                className='banner-img'
            />

            <h1
                className='heading-shadow'
            >
                {env.brand}
            </h1>

            <h1
                className='heading'
            >
                {env.brand}
            </h1>
        </div>

        <Nav
            routes={navRoutes}
        />
    </header>;
}