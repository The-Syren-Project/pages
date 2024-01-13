import { Route, Routes } from 'react-router';
import { routes } from './routes/routes';
import { useEffect, useState } from 'react';
import { setPlaceholders } from './env';
import { loadSocials } from './socials';

/**
 *
 * @param {*} list
 * @returns
 */
function routeLoader(list) {
    if (!list)
        return null;

    return Object.keys(list).map((key) => {
        const { subroutes, ...props } = list[key];

        console.log(key, subroutes, props);

        if (!subroutes)
            return <Route path={key} {...props} key={key} />;

        return <Route path={key} {...props} key={key}>
            {routeLoader(subroutes)}
        </Route>;
    });
}

/**
 *
 * @returns
 */
export default function App() {

    const [ready, isReady] = useState(false);

    useEffect(() => {
        const init = async () => {
            const response = await fetch('/placeholders.json');
            const body = await response.json();

            setPlaceholders(body);

            await loadSocials();

            isReady(true);
        };

        init().catch(console.error);
    }, []);

    return <Routes>
        {ready && routeLoader(routes)}
    </Routes>;
}