'use strict';
/******
* Lightly edited from https://github.com/dbjsdev/BrewChain
* Added start / stop functions for testing
* Added endpoint to get chain
* Made ws port always http port + 1
*/

const express = require('express');
const bodyParser = require('body-parser');
const BrewNode = require('./brewNode');

const BrewHTTP = function (http_port){
  const ws_port = Number.parseInt(http_port) + 1
	const app = new express();
  let server;
  let node1;

	app.use(bodyParser.json());

  // TODO: change to app.post, '/addNode', with body {host='blahblah', port: '0000'}
	app.post('/addNode', (req, res)=>{
		console.log(`${http_port}: `, 'add host: '+ String(Number.parseInt(req.body.port) + 1))
		node1.addPeer(req.body.host, String(Number.parseInt(req.body.port) + 1))

		res.send();
	})

	app.get('/spawnBrew/:teammember', (req, res)=>{
		let newBlock = node1.createBlock(req.params.teammember);
		console.log(`${http_port}: `, 'block created');
		res.send();
	})

  app.get('/brews', (req, res)=>{
		const chain = node1.getChain();
		console.log(`${http_port}: `, 'getting chain');
		res.json(chain);
	})

  function start() {
    node1 = new BrewNode(ws_port);
    node1.init();
    server = app.listen(http_port, () => {
      console.log(`${http_port}: ', 'http server up.. ${http_port}`);
    })
  }

  function stop(cb) {
    node1.close(cb);
    server.close(cb);
  }

  return {
    start,
    stop
  }

}

module.exports = BrewHTTP;
