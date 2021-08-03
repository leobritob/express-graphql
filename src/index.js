import { ApolloServer, gql } from 'apollo-server'
import { userService } from './app/users/user.service'

const typeDefs = gql`
  type User {
    id: ID!
    first_name: String!
    last_name: String!
  }

  type Query {
    users: [User]
    getUserById(id: String!): User
    getUserByName(first_name: String!): User
  }

  type Mutation {
    createUser(first_name: String!, last_name: String!): User
  }
`

const resolvers = {
  Query: {
    users: () => userService.findAll(),
    getUserById: (_, { id }) => userService.findById(id),
    getUserByName: (_, { first_name }) => userService.findByFirstName(first_name),
  },
  Mutation: {
    createUser: (_, args) => userService.save(args),
  },
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
