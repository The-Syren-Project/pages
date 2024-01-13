import { useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import './styles/blog.scss';

/**
 *
 * @returns
 */
export default function BlogRoute() {

    /**
     * @type {import('../../../../public/blog_map.json')}
     */
    const _mapping = null;

    const [mapping, setMapping] = useState(_mapping);
    const [ready, isReady] = useState(false);

    useEffect(() => {
        const init = async () => {
            const response = await fetch('/blog_map.json');
            /**
             * @type {import('../../../../public/blog_map.json')}
             */
            const body = await response.json();

            setMapping(body);

            isReady(true);
        };

        init().catch(console.error);
    }, []);

    return <div
        className='route blog'
    >
        <div
            className='categories-list'
        >
            {
                ready &&
                Object.keys(mapping.nested).map((category) => {
                    return <a
                        href={`/blogs/${category}`}
                        key={category}
                    >
                        {category}
                    </a>;
                })
            }
        </div>

        {
            ready &&
            <Outlet
                context={mapping}
            />
        }
    </div>;
}