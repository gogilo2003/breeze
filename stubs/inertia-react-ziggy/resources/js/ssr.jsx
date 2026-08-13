import { createInertiaApp } from '@inertiajs/react';
import createServer from '@inertiajs/react/server';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import ReactDOMServer from 'react-dom/server';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createServer((page) =>
    createInertiaApp({
        page,
        render: ReactDOMServer.renderToString,
        title: (title) => `${title} - ${appName}`,
        resolve: (name) =>
            resolvePageComponent(
                `./Pages/${name}.jsx`,
                import.meta.glob('./Pages/**/*.jsx'),
            ),
        setup: ({ App, props }) => {
            global.route = (name, params, absolute) => {
                const ziggy = page.props.ziggy;

                if (typeof name === 'undefined') {
                    return {
                        current: (routeName) => {
                            const currentUrl = new URL(page.url);
                            const route = ziggy.routes[routeName];
                            if (!route) return false;

                            let routeUri = route.uri.replace(/{[^}]+}/g, '([^/]+)');
                            if (routeUri.endsWith('/')) {
                                routeUri = routeUri.slice(0, -1);
                            }

                            const regex = new RegExp(`^${routeUri}$`);
                            return regex.test(currentUrl.pathname);
                        },
                    };
                }

                const route = ziggy.routes[name];
                if (!route) {
                    throw new Error(`Route [${name}] not defined.`);
                }

                let uri = route.uri;

                for (const [key, value] of Object.entries(params || {})) {
                    uri = uri.replace(`{${key}}`, encodeURIComponent(value));
                }

                if (uri.endsWith('/') && uri.length > 1) {
                    uri = uri.slice(0, -1);
                }

                let url = absolute ? ziggy.url : '';
                url += '/' + uri;

                return url.replace(/\/+/g, '/');
            };

            return <App {...props} />;
        },
    }),
);
