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
