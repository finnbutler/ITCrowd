Springboot API for interacting with a mySQL database through simple endpoints.

Configure database connection settings with src/main/resources/application.properties

App is currently set up for interacting with a local install of a mySQL database.

We gave up on using a mySQL database for storing our data because we couldn't get our react-native app, database and this app all deployed on uqcloud. We switched to Firebase, which doesn't have an option for mySQL.

App is currently in a proof-of-concept test state that successfully connects to a local database and has endpoints for fetching account data. Pushing account data would have been done through axios for React using push endpoints.
