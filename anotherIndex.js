const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require('graphql')
const app = express()
const port = process.env.PORT || 9000


const RootQueryType = new GraphQLObjectType({
    name: 'Query',
    description: 'Root Query',
    fields: () => ({
        greeting: {
            type: GraphQLString,
            description: 'DOnt know for now',
            resolve: () => students
        }
    })
})

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'HelloWorld',
        fields: () => ({
            greeting: {
                type: GraphQLString,
                resolve: () => 'Hello World'
            }
        })
    })
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(port, () => console.log('Server running'))