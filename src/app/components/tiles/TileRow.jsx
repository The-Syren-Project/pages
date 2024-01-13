import Tile from './Tile';
import './styles/tile-row.scss';

/**
 *
 * @returns
 */
export default function TileRow({ row }) {
    return <div
        className='tile-row'
    >
        {
            row.map((tile, t) => {
                return <Tile
                    key={t}
                    tile={tile}
                />;
            })
        }
    </div>;
}