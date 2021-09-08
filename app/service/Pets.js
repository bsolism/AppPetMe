import client from "./Client";

const getPets = () => client.get("/pet");

export default { getPets };
