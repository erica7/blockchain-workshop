Exercise 5 - Proof Of Work
==========================

This just adds the Proof Of Work functionality to BrewChain class that is added at the end of the blog post.  There is one exercise, repeated twice with different Proof Of Work requirements.  It is the same as the third exercise in step 2 with the solution already filled in.  The key thing to note is how much longer it takes to execute since the node is having to calculate proof of work before adding a block to the chain.


- Change to this directory and run `npm install`
- Run the code with `npm run test`.
  - Notice how making the proof of work requirement 1 digit longer affects the time to add a block to the chain.
  - There is a lot of randomness so run it multiple times to get a better idea for average run times
  - Experiment with making the proof of work requirement more strict and see how that affects the time.
- Proceed to [Step 6](../06_reach_out_and_touch_somebrew)
