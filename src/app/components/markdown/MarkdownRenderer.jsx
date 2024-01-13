import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { xonokai } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './styles/markdown.scss';
import Mermaid from './Mermaid';
import remarkEmoji from 'remark-emoji';

/**
 *
 * @param {*} children
 * @returns
 */
function getHeadingId(children) {
    if (!children)
        return '';

    let str = String(children);

    const match = str.match(/\{#([^\}]+)\}/);
    if (match)
        str = match[1];

    return str
        .replace(/\s/g, '-')
        .toLowerCase()
        .trim();
}

/**
 *
 * @param {*} str
 * @returns
 */
function getHeadingBody(str) {
    if (!str)
        return '';

    return String(str)
        .replace(/\{#[^\}]+\}/g, '')
        .trim();
}

const customComponents = {
    code(props) {
        const { children, className, node, ...rest } = props;
        const match = /language-(\w+)/.exec(className || '');

        if (match) {
            if (match[1] === 'mermaid') {
                return <Mermaid>
                    {`<pre class="mermaid">${children}</pre>`}
                </Mermaid>;
            }

            return <SyntaxHighlighter
                {...rest}
                PreTag="div"
                language={match[1]}
                style={xonokai}
            >
                {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>;
        }

        return <code
            {...rest}
            className={className + ' inline-code'}
        >
            {children}
        </code>;
    },
    h1({ children, node, ...props }) {
        return <h1 id={getHeadingId(children)} {...props}>{getHeadingBody(children)}</h1>;
    },
    h2({ children, node, ...props }) {
        return <h2 id={getHeadingId(children)} {...props}>{getHeadingBody(children)}</h2>;
    },
    h3({ children, node, ...props }) {
        return <h3 id={getHeadingId(children)} {...props}>{getHeadingBody(children)}</h3>;
    },
    h4({ children, node, ...props }) {
        return <h4 id={getHeadingId(children)} {...props}>{getHeadingBody(children)}</h4>;
    },
    h5({ children, node, ...props }) {
        return <h5 id={getHeadingId(children)} {...props}>{getHeadingBody(children)}</h5>;
    },
    h6({ children, node, ...props }) {
        return <h6 id={getHeadingId(children)} {...props}>{getHeadingBody(children)}</h6>;
    }
};

const remarkPlugins = [
    remarkGfm,
    remarkEmoji
];

const rehypePlugins = [];

/**
 *
 * @param {*} param0
 * @returns
 */
export default function MarkdownRenderer({ children }) {
    return <div
        className='markdown-wrapper'
    >
        <Markdown
            remarkPlugins={remarkPlugins}
            rehypePlugins={rehypePlugins}
            components={customComponents}
        >
            {children}
        </Markdown>
    </div>;
}