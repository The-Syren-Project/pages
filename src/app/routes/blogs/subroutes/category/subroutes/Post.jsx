import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { useParams } from 'react-router';
import MarkdownRenderer from '../../../../../components/markdown/MarkdownRenderer';
import './styles/post.scss';

/**
 *
 * @returns
 */
export default function PostRoute() {
    const { nested, pages } = useOutletContext();

    const params = useParams();

    const [markdown, setMarkdown] = useState('');

    console.log('POST', params, nested, pages);

    let here = nested;
    let lastNested = {};
    let lastPages = [];
    let pageRoute = params['*'].split(/\//g);

    pageRoute.forEach((p) => {
        lastNested = here[p].nested;
        lastPages = here[p].pages;
        here = here[p].nested;
    });
    console.log(here, lastNested, lastPages);

    useEffect(() => {
        const init = async () => {
            if (lastPages.length === 1) {
                const response = await fetch(`/blogs/${params.category}/${params['*']}/${lastPages[0]}`);
                const body = await response.text();

                setMarkdown(body);
            }
        };

        init().catch(console.error);
    }, []);

    const breadcrumbs = [
        params.category,
        ...pageRoute
    ];

    return <div
        className='post'
    >
        <div
            className='post-subroutes'
        >
            <div
                className='breadcrumbs'
            >
                {
                    breadcrumbs.map((r, i) => {
                        const link = <a key={i} href={`/blogs/${breadcrumbs.slice(0, i + 1).join('/')}`}>{r}</a>;
                        if (i < breadcrumbs.length - 1)
                            return <>
                                {link}

                                <span>{'>'}</span>
                            </>;

                        return link;
                    })
                }
            </div>

            <div
                className='nested-posts'
            >
                {
                    Object.keys(lastNested).map((item) => {
                        return <a
                            key={item}
                            href={`/blogs/${params.category}/${params['*']}/${item}`}
                            className='post-link'
                        >
                            {item}
                        </a>;
                    })
                }
            </div>
        </div>

        <div
            className='post-body'
        >
            <div
                className='post-controls'
            >
                <i
                    className='icon bi bi-share'
                />
            </div>

            <MarkdownRenderer>
                {markdown}
            </MarkdownRenderer>
        </div>
    </div>;
}