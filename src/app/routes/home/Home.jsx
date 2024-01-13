import { useEffect, useState } from 'react';
import TileRow from '../../components/tiles/TileRow';
import './styles/home.scss';
import { usePlaceholders } from '../../env';

const TILES_PER_ROW = 3;

/**
 *
 * @returns
 */
export default function HomeRoute() {

    const [tiles, setTiles] = useState([]);

    useEffect(() => {
        const init = async () => {
            const response = await fetch('/home_tiles.json');
            const body = await response.text();

            const json = usePlaceholders(body);

            setTiles(JSON.parse(json));
        };

        init().catch(console.error);
    }, []);

    const tileMap = [];
    for (let i = 0; i < tiles.length; i += TILES_PER_ROW)
        tileMap.push(tiles.slice(0 + i, i + TILES_PER_ROW));

    return <div
        className='route home'
    >
        <div
            className='tile-container'
        >
            {
                tileMap.map((row, i) => {
                    return <TileRow
                        key={i}
                        row={row}
                    />;
                })
            }
        </div>
    </div>;
}