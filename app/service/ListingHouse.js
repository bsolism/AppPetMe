import client from "./Client";

const endPoint = "/profilehouse/";

const getProfileHouse = () => client.get(endPoint);
const getHouseByUserId = (id) => client.get(endPoint + "user/" + id);
const deletedHouse = (id) => client.delete(endPoint + id);

const addProfileHouse = (dataInfo, onUploadProgress) => {
  const data = new FormData();
  data.append("name", dataInfo.name);
  data.append("city", dataInfo.city);
  data.append("address", dataInfo.address);
  data.append("phone", dataInfo.phone);
  data.append("email", dataInfo.email);
  data.append("userId", dataInfo.userId);
  data.append("rtn", dataInfo.rtn);
  data.append("accountBank", dataInfo.accountBank);
  data.append("typeAccount", dataInfo.typeAccount);
  data.append("bankName", dataInfo.bankName);

  if (dataInfo.image != undefined) {
    data.append("file", {
      uri: dataInfo.image,
      name: "image.jpg",
      type: "image/jpeg",
    });
  }

  return client.post(endPoint, data, {
    onUploadProgress: (progress) =>
      onUploadProgress(progress.loaded / progress.total),
  });
};

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

export default {
  getProfileHouse,
  getHouseByUserId,
  addProfileHouse,
  updateProfileHouse,
  deletedHouse,
};
