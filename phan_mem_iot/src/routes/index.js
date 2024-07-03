import config from '~/config';

// pages
import Home from '~/pages/Home';
import Login from '~/pages/Login';
import ClearWater from '~/pages/ClearWater';

// Public routers
const publicRoutes = [
   { path: config.routes.home, component: Home },
   { path: config.routes.login, component: Login },
   { path: config.routes.nuocSach, component: ClearWater }
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
