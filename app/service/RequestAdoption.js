import client from "./Client";

const endPoint = "/requestadoption/";

const getRequestById = (id) => client.get(endPoint + "house/" + id);

const addRequest = (data, onUploadProgress) => {
  return client.post(endPoint, data, {
    onUploadProgress: (progress) =>
      onUploadProgress(progress.loaded / progress.total),
  });
};

export default { addRequest, getRequestById };
