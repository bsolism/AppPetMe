import client from "./Client";

const endPoint = "/user/";

const getUser = () => client.get(endPoint);

const register = (userInfo) => client.post(endPoint, userInfo);

export const updateUser = (dataUser, field) => {
  const data = new FormData();
  data.append("userId", dataUser.userId);
  data.append("email", dataUser.email);

  if (field == "file") {
    data.append("file", {
      uri: dataUser.file,
      name: "image.jpg",
      type: "image/jpeg",
    });
  } else {
    data.append([field], dataUser[field]);
  }

  return client.put(endPoint + dataUser.userId, data);
};

export default { getUser, register, updateUser };
