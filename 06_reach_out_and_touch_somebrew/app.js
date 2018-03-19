'use strict';

const BrewHttp = require('./brewhttp');

const brewServer = new BrewHttp(3000); // TODO: Change port if necessary
brewServer.start();

// TODO: From a browser add a peer.  TBD on day of workshop, ask Gangstead
