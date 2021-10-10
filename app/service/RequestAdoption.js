import client from "./Client";

const endPoint = "/requestadoption/";

const getRequestById = (id) => client.get(endPoint + "house/" + id);

const addRequest = (data, onUploadProgress) => {
  return client.post(endPoint, data, {
    onUploadProgress: (progress) =>
      onUploadProgress(progress.loaded / progress.total),
  });
};
const updateUser = (info) =>
  client.put(endPoint + info.requestAdoptionId, info);

export default { addRequest, getRequestById, updateUser };
