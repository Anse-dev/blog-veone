const fs = require('fs');
const path = require('path');

const getRoutes = (dir, baseRoute = '') => {
    const routes = [];

    fs.readdirSync(dir).forEach(file => {
        const fullPath = path.join(dir, file);
        const stats = fs.statSync(fullPath);

        if (stats.isDirectory()) {
            routes.push(...getRoutes(fullPath, `${baseRoute}/${file}`));
        } else if (file === 'page.js') {
            routes.push(baseRoute || '/');
        }
    });

    return routes;
};

const appDir = path.join(__dirname, 'src');
const routes = getRoutes(appDir);

console.log('Routes:', routes);
