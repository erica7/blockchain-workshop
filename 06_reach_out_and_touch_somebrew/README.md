Exercise 6 - Reach Out and Touch Somebrew
=========================================

In this exercise we are going to modify the BrewHttp code slightly so that you can pass in peers outside of localhost (ie with your Nodeschool peers in this room).


- Change to this directory and run `npm install`
- Go to `brewhttp.js` and make these changes to the route `/addNode/:port`
  - Change path to `/addNode`
  - Change method to POST
  - Get a host and port from the body (instead of just the port from the query)
- Run `node app.js` to start a server
  - You may have to change port hard coded in app.js
  - Use postman or curl to add a peer of someone else's computer in the room and see if you can download the chain.  We'll make an announcement at the meetup once we figure out the details.


Congratulations, you've finished

![](https://i.ytimg.com/vi/_n-3yneHZko/hqdefault.jpg)


---
## Notes
Run multiple servers on one server using different ports
```bash
# uses default port specified in `app.js`, which in this case is 3000
node app.js

# uses the specified port instead of the default
PORT=4000 node app.js
```

Build some chains and look at them.
```bash
MACHINE:~ user$ curl http://localhost:3000/brews
[{"index":0,"timestamp":0,"data":"our genesis data","previousHash":"-1","nonce":0,"hash":"a2f51dabe408fb80123e3fe7fbdbf8f49e164877dc4ac940fb4490b99e57dfed"}]

MACHINE:~ user$ curl http://localhost:4000/brews
[{"index":0,"timestamp":0,"data":"our genesis data","previousHash":"-1","nonce":0,"hash":"a2f51dabe408fb80123e3fe7fbdbf8f49e164877dc4ac940fb4490b99e57dfed"}]

MACHINE:~ user$ curl http://localhost:4000/spawnBrew/THOMAS

MACHINE:~ user$ curl http://localhost:4000/brews
[{"index":0,"timestamp":0,"data":"our genesis data","previousHash":"-1","nonce":0,"hash":"a2f51dabe408fb80123e3fe7fbdbf8f49e164877dc4ac940fb4490b99e57dfed"},{"timestamp":1521811333086,"data":"THOMAS","index":1,"previousHash":"a2f51dabe408fb80123e3fe7fbdbf8f49e164877dc4ac940fb4490b99e57dfed","nonce":15558,"hash":"2a887355698e5bf26d9fa098521166d8c474fc881fb633b4cc44b975b0028000"}]

MACHINE:~ user$ curl http://localhost:4000/spawnBrew/ERICA

MACHINE:~ user$ curl http://localhost:4000/brews
[{"index":0,"timestamp":0,"data":"our genesis data","previousHash":"-1","nonce":0,"hash":"a2f51dabe408fb80123e3fe7fbdbf8f49e164877dc4ac940fb4490b99e57dfed"},{"timestamp":1521811333086,"data":"THOMAS","index":1,"previousHash":"a2f51dabe408fb80123e3fe7fbdbf8f49e164877dc4ac940fb4490b99e57dfed","nonce":15558,"hash":"2a887355698e5bf26d9fa098521166d8c474fc881fb633b4cc44b975b0028000"},{"timestamp":1521811359781,"data":"ERICA","index":2,"previousHash":"2a887355698e5bf26d9fa098521166d8c474fc881fb633b4cc44b975b0028000","nonce":495,"hash":"885bcc07881dec9c11037bf76d0704982938e7a827d22aa76abb4c194468a000"}]

MACHINE:~ user$ url -d '{"host":"localhost", "port":"4000"}' -H "Content-Type: application/json" -X POST http://localhost:3000/addNode
```