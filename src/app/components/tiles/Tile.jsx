import './styles/tile.scss';

/**
 *
 * @returns
 */
export default function Tile({ tile }) {

    const body = <>
        <div
            className='img-placeholder'
        />

        <img
            alt={tile.label || 'Clickable Tile'}
            {...tile.img}
        />

        {
            tile.label &&
            <div
                className='label'
            >
                {tile.label}
            </div>
        }

        {
            tile.summary &&
            <div
                className='summary'
            >
                {tile.summary}
            </div>
        }
    </>;

    if (tile.href) {
        return <a
            className='tile'
            href={tile.href}
        >
            {body}
        </a>;
    }

    return <div
        className='tile'
    >
        {body}
    </div>;
}