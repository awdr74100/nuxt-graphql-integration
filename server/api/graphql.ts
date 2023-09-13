import { ApolloServer } from "@apollo/server";
import { startServerAndCreateH3Handler } from "@as-integrations/h3";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { resolve } from "node:path";

interface User {
  id: number;
  name: string;
  email: string;
  website: string;
}

interface Photo {
  id: number;
  title: String;
  url: String;
}

const resolvers = {
  Query: {
    user: async (parent: any, args: { id: number }, context: any) => {
      const url = `https://jsonplaceholder.typicode.com/users/${args.id}`;

      return $fetch<User>(url, { method: "GET" });
    },
    users: async (parent: any, args: {}, context: any) => {
      const url = `https://jsonplaceholder.typicode.com/users`;

      return $fetch<User[]>(url, { method: "GET" });
    },
    photo: async (parent: any, args: { id: number }, context: any) => {
      const url = `https://jsonplaceholder.typicode.com/photos/${args.id}`;

      return $fetch<Photo>(url, { method: "GET" });
    },
  },
};

const apollo = new ApolloServer({
  typeDefs: readFileSync(
    resolve(fileURLToPath(import.meta.url), "../../../server/schema.graphql"),
    "utf-8"
  ),
  resolvers,
});

export default startServerAndCreateH3Handler(apollo);
