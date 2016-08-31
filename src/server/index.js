'use strict';
import path from 'path';
import express from 'express';
import exphbs from 'express-handlebars';
import tags from './views/tags';
import routes from './routes'

const app = express().disable('x-powered-by').disable('etag');

//app settings
app.set('views', path.join(__dirname, 'views'))
    .set('view engine', 'hbs')
    .set('view cache', true)
    .set('port', process.env.port || 8081);

//app view engine
app.engine('hbs', exphbs({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: app.get('views') + '/layouts'
}));

//make script tags available to views
app.locals.scripts = tags.scripts;
app.locals.styles = tags.styles;

//register routes
app.use('/static/assets', express.static(path.join(__dirname, '../assets')));
app.use(routes);

//run server
app.listen(app.get('port'), () => {
    console.log(`Server listening on port ${app.get('port')} in ${app.settings.env} mode`);
});