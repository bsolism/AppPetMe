import client from "./Client";
const endpoint = "/donation";

export const addDonation = (formdata, onUploadProgress) => {
  const data = new FormData();
  data.append("monto", formdata.amount);
  data.append("profileHouseId", formdata.profileHouseId);
  data.append("petId", formdata.petId);
  data.append("prefix", formdata.prefix);
  data.append("suscription", formdata.suscription);

  return client.post(endpoint, data, {
    onUploadProgress: (progress) =>
      onUploadProgress(progress.loaded / progress.total),
  });
};

export default { addDonation };
