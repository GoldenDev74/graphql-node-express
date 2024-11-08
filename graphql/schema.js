import { buildSchema } from "graphql";

export default buildSchema(`
    type Todo {
        id: ID!
        text: String!
        finished: Boolean!
    }
    type RootQuery {
        allTodos: [Todo]!
        oneTodo(id: ID!): Todo
        filteredTodos(finished: Boolean!): [Todo!]!
    }
    type Mutation {
        createTodo(text: String!): Todo!
        updateTodo(id: ID!, text: String, finished: Boolean): Todo!
        deleteTodo(id: ID!): Todo!
    }
    schema {
        query: RootQuery
        mutation: Mutation
    }
`);
