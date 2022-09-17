const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const { makeExecutableSchema } = require('graphql-tools')
const { graphqlHTTP } = require('express-graphql')
const fs = require('fs')

const port = process.env.PORT || 9000
const app = express()
//register middleware
app.use(bodyParser.json(), cors())

const typeDefs = fs.readFileSync('./schema.graphql',{encoding:'utf-8'})
const resolvers = require('./resolvers')


const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))






app.listen(port, () => console.log(`server is up and running at ${port}`))