import client from "./Client";

const getPets = () => client.get("/pet");
const getPetsByHouseId = (id) => client.get("/pet/houseid/" + id);

export default { getPets, getPetsByHouseId };
