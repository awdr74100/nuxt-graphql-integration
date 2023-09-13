import { fileURLToPath } from "node:url";
import { resolve } from "node:path";

export default defineEventHandler((event) => {
  interface User {
    id: number;
    name: string;
    email: string;
    website: string;
  }

  const url = `https://jsonplaceholder.typicode.com/users`;

  return $fetch<User[]>(url, { method: "get" });
});
