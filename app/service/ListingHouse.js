import client from "./Client";

const endPoint = "/profilehouse/";

const getProfileHouse = () => client.get(endPoint);

export const updateProfileHouse = (dataForm, field) => {
  const data = new FormData();
  data.append("profileId", dataForm.profileHouseId);

  if (field == "file") {
    data.append("file", {
      uri: dataForm.file,
      name: "image.jpg",
      type: "image/jpeg",
    });
  } else {
    data.append([field], dataForm[field]);
  }

  return client.put(endPoint + dataForm.profileHouseId, data);
};

export default { getProfileHouse, updateProfileHouse };
