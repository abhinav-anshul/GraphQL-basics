const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const app = express();

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true

}));

app.listen(4193, () => {
    console.log("Now listening to requests to port:4193");
})