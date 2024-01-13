import BlogRoute from './blogs/Blog';
import CategoryRoute from './blogs/subroutes/category/Category';
import HomeRoute from './home/Home';
import NewsRoute from './news/News';
import PageNotFound from './404/PageNotFound';
import PostRoute from './blogs/subroutes/category/subroutes/Post';
import RouteTemplate from './Template';
import ContactRoute from './contact/Contact';

export const routes = {
    '/': {
        element: <RouteTemplate />,
        subroutes: {
            '/': {
                element: <HomeRoute />
            },
            '/blogs': {
                element: <BlogRoute />,
                subroutes: {
                    '/blogs/:category': {
                        element: <CategoryRoute />,
                        subroutes: {
                            '/blogs/:category/*': {
                                element: <PostRoute />
                            }
                        }
                    }
                }
            },
            '/news': {
                element: <NewsRoute />
            },
            '/contact': {
                element: <ContactRoute />
            },
            '*': {
                element: <PageNotFound />
            }
        }
    }
};

export const navRoutes = [
    {
        label: 'home',
        path: '/',
        icon: 'house'
    },
    {
        label: 'blogs',
        path: '/blogs',
        icon: 'blockquote-left'
    },
    {
        label: 'news',
        path: '/news',
        icon: 'newspaper'
    },
    {
        label: 'contact',
        path: '/contact',
        icon: 'at'
    }
];