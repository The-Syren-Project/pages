import { Outlet, useParams } from 'react-router';
import { useOutletContext } from 'react-router-dom';
import './styles/category.scss';

/**
 *
 * @returns
 */
export default function CategoryRoute() {

    const { pages, nested } = useOutletContext();

    const params = useParams();

    const here = nested[params.category];

    return <div
        className='category-container'
    >
        {
            !params['*'] &&
            <div
                className='post-links-container'
            >
                {
                    Object.keys(here.nested).map((item) => {
                        return <a
                            key={item}
                            href={`/blogs/${params.category}/${item}`}
                            className='post-link'
                        >
                            {item}
                        </a>;
                    })
                }
            </div>
        }

        <Outlet context={here} />
    </div>;
}