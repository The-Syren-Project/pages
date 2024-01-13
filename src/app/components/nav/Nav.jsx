import './styles/nav.scss';

/**
 *
 * @param {*} param0
 * @returns
 */
export default function Nav({ routes }) {
    return <nav
        className='nav'
    >
        <a
            className='brand'
            href='/'
        >
            <i
                className='icon bi bi-house'
            />
        </a>

        <ul
            className='nav-list'
        >
            {
                routes.map((route) =>
                    <li
                        key={route.label}
                        className='nav-list-item'
                    >
                        <a href={route.path}>
                            {
                                route.icon &&
                                <i
                                    className={`icon bi bi-${route.icon}`}
                                />
                            }

                            {route.label}
                        </a>
                    </li>
                )
            }
        </ul>
    </nav>;
}