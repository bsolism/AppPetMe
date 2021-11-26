import client from "./Client";
const endpoint = "/pet";

const getPets = () => client.get(endpoint);
const getPetsByHouseId = (id) => client.get(endpoint + "/houseid/" + id);

export const addPet = (pet, onUploadProgress) => {
  const data = new FormData();
  data.append("name", pet.name);
  data.append("category", pet.category);
  data.append("description", pet.description);
  data.append("old", parseInt(pet.old));
  data.append("weight", pet.weight);
  data.append("height", pet.height);
  data.append("sex", pet.sex);
  data.append("color", pet.color);
  data.append("clinicHistory", pet.clinicHistory);
  data.append("lifeHistory", pet.lifeHistory);
  data.append("isAdoptable", pet.isAdoptable);
  data.append("profileHouseId", pet.profileHouseId);

  pet.file.forEach((image, index) =>
    data.append("file", {
      name: "image" + index + ".jpg",
      type: "image/jpeg",
      uri: image,
    })
  );
  return client.post(endpoint, data, {
    onUploadProgress: (progress) =>
      onUploadProgress(progress.loaded / progress.total),
  });
};

export default { getPets, getPetsByHouseId, addPet };
