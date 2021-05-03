/* eslint-disable linebreak-style */
/* eslint-disable semi */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */
const Hapi = require('@hapi/hapi');
const routes = require('./routes');


const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: 'localhost',
        routes: {
          cors: {
            origin: ['*'],
          },
        },
      });

    server.route(routes);

    await server.start();
    console.log(`Server berlajalan pada ${server.info.uri}`);
};

init();
