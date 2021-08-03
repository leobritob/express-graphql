"use strict";

var _apolloServer = require("apollo-server");

var _user = require("./app/users/user.service");

var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var typeDefs = (0, _apolloServer.gql)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  type User {\n    id: ID!\n    first_name: String!\n    last_name: String!\n  }\n\n  type Query {\n    users: [User]\n    getUserById(id: String!): User\n    getUserByName(first_name: String!): User\n  }\n\n  type Mutation {\n    createUser(first_name: String!, last_name: String!): User\n  }\n"])));
var resolvers = {
  Query: {
    users: () => _user.userService.findAll(),
    getUserById: (_, _ref) => {
      var {
        id
      } = _ref;
      return _user.userService.findById(id);
    },
    getUserByName: (_, _ref2) => {
      var {
        first_name
      } = _ref2;
      return _user.userService.findByFirstName(first_name);
    }
  },
  Mutation: {
    createUser: (_, args) => _user.userService.save(args)
  }
};
var server = new _apolloServer.ApolloServer({
  typeDefs,
  resolvers
});
server.listen().then(_ref3 => {
  var {
    url
  } = _ref3;
  console.log("\uD83D\uDE80  Server ready at ".concat(url));
});