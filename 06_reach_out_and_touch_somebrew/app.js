'use strict';

const BrewHttp = require('./brewhttp');

const port = process.env.PORT || 3000;

const brewServer = new BrewHttp(port); // TODO: Change port if necessary
brewServer.start();

// TODO: From a browser add a peer.  TBD on day of workshop, ask Gangstead
