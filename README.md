# post-form

Using Node.js with an express framework, and jade for the views, I have built a simple server to serve the from and store the data the dataStore.json file. 
I have added some twitter bootstrap for basic styling. I have unit tests to test the end points using `tape` and `shot`.  

To start the application:
`npm install` then `npm start`.
To run the tests `npm run test`

I have created a datastore object, which contains objects for each person with a unique ID, that contains the associated firstname and surname. This is then turned in to JSON and stored in the dataStore.json file. Additional names are added to this object.

Please note I am primarily a front-end developer, with some fullstack experience. I am currently looking for frontend work, or would consider a fullstack node position at a more junior level. I would be more than happy to complete a more front-end focused task if you have one. 

##Improvements
Some improvement I would like to make:
- allow users to update specific posts
- allow users to delete data
- prevent script injections (necessary if using a db)
- prevent users from entering a value of null
- end to end testing for BDD
- improved test coverage
