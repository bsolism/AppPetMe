import client from "./Client";

const endPoint = "/requestadoption/";

const getRequestById = (id) => client.get(endPoint + "house/" + id);
const getRequestByUserId = (id) => client.get(endPoint + "user/" + id);

const addRequest = (data, onUploadProgress) => {
  return client.post(endPoint, data, {
    onUploadProgress: (progress) =>
      onUploadProgress(progress.loaded / progress.total),
  });
};
const update = (info) => client.put(endPoint + info.requestAdoptionId, info);

export default { addRequest, getRequestById, getRequestByUserId, update };
