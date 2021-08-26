import { create } from "apisauce";
import server from "./server";

const client = create({
  // baseURL: "http://bsolism02-001-site1.itempurl.com/api",
  baseURL: server.URI,
});

export default client;
