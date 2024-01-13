import { useEffect, useState } from 'react';
import { rehype } from 'rehype';
import rehypeMermaid from 'rehype-mermaid';

import mermaid from 'mermaid';

mermaid.initialize({ startOnLoad: true });

/**
 *
 * @param {*} param0
 * @returns
 */
export default function Mermaid({ children }) {
    const [graph, setGraph] = useState(null);

    useEffect(() => {
        const init = async () => {
            const { value } = await rehype()
                .use(rehypeMermaid, {})
                .process(children);

            setGraph(value);
        };

        if (!graph)
            init().catch(console.error);
    }, [graph]);

    return <div
        className='mermaid'
    >
        <div
            dangerouslySetInnerHTML={{ __html: graph }}
        />
    </div>;
}