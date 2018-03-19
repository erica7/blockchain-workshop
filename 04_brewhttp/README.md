Exercise 4 - BrewHttp
=====================

BrewHttp adds a simple HTTP layer on top of BrewNode.  We are going to start a BrewHttp server, connect it to another server and request and receive the chain. BrewHttp only has 2 functions:
```
{
    init,
    close
}
```
Once initialized the http server will listen on the provided port and use port+1 for websocket communication to the underlying BrewNodes.  It creates an Express server to provide the following two endpoints:
```
GET /addNode/:port
GET /spawnBrew/:teammember
GET /brews
```
> Note these aren't very "RESTful".  Normally adding a new resource would be a POST with the data in the body, but this way is easier to play around by just pasting urls in the browser.

The test suite [test.js](/test.js) has a number of tests to exercise all the exposed endpoints or BrewHttp.  The tests are marked where you should fill them out.

- Change to this directory and run `npm install`
- Fill in the code in `test.js`.
  - Look for `// TODO:`
  - `{}` are placeholders for objects you should create.
- Verify your code with `npm run test`.
  - HOT TIP: If your tests are failing and the test never finishes running because the servers are still running try increasing the `messageDelay`.  It works on my machine as low as 9 ms but YMMV.
- Proceed to [Step 5](../05_proof_of_work)
