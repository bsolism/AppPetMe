import client from "./Client";

const login = (email, password) => client.post("/login", { email, password });

export default { login };
