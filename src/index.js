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
    updateUserById(id: ID!, first_name: String!, last_name: String!): Boolean
    deleteUserByid(id: ID!): Boolean
  }
`

const resolvers = {
  Query: {
    users: () => userService.findAll(),
    getUserById: (_, { id }) => userService.findById(id),
    getUserByName: (_, { first_name }) => userService.findByFirstName(first_name),
  },
  Mutation: {
    createUser: (_, args) => userService.insert(args),
    updateUserById: (_, { id, ...user }) => userService.update(id, user),
    deleteUserByid: (_, { id }) => userService.delete(id),
  },
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
