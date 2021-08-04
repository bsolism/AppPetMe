import client from "./Client";

const register = (userInfo) => client.post("/user", userInfo);

export default { register };
