const dataHook = (data) => {
  const dataMod = {
    requestAdoptionId: data.requestAdoptionId,
    name: data.name,
    email: data.email,
    dni: data.dni,
    phone: data.phone,
    address: data.address,
    city: data.city,
    province: data.province,
    country: data.country,
    timeAlone: data.timeAlone,
    hasPets: data.hasPets,
    whatPet: data.whatPet,
    why: data.why,
    comentary: data.comentary,
    isApproved: data.isApproved,
    isActive: data.isActive,
    isRejected: data.isRejected,
    pet: {
      name: data.pet.name,
      old: data.pet.old,
      sex: data.pet.sex,
      color: data.pet.color,
      weight: data.pet.weight,
    },
  };
  return { dataMod };
};

const Approved = async (
  dataMod,
  setDataMod,
  navigation,
  onRefresh,
  updateApi
) => {
  const dataUpdate = {
    requestAdoptionId: dataMod.requestAdoptionId,
    hasPets: dataMod.hasPets,
    isApproved: true,
    isActive: dataMod.isActive,
    isRejected: dataMod.isRejected,
  };
  setDataMod({ ...dataMod, isApproved: true });
  const res = await updateApi.request(dataUpdate);
  if (res.ok) {
    alert("Solicitud de adopción ha sido Aprobada");
    onRefresh(dataMod.requestAdoptionId);
    navigation.goBack();
  }
};

const Rejected = async (
  dataMod,
  setDataMod,
  navigation,
  onRefresh,
  updateApi
) => {
  const dataUpdate = {
    requestAdoptionId: dataMod.requestAdoptionId,
    hasPets: dataMod.hasPets,
    isApproved: dataMod.isApproved,
    isActive: dataMod.isActive,
    isRejected: true,
  };
  setDataMod({ ...dataMod, isRejected: true });
  const res = await updateApi.request(dataUpdate);
  if (res.ok) {
    alert("Solicitud de adopción ha sido Rechazada");
    onRefresh(dataMod.requestAdoptionId);
    navigation.goBack();
  }
};

const updateSwitch = async (isEnabled, dataMod, setDataMod, updateApi) => {
  if (!isEnabled) {
    const dataUpdate = {
      requestAdoptionId: dataMod.requestAdoptionId,
      hasPets: false,
      whatPet: "",
      isApproved: dataMod.isApproved,
      isActive: dataMod.isActive,
      isRejected: dataMod.isRejected,
    };
    setDataMod({ ...dataMod, whatPet: "" });
    await updateApi.request(dataUpdate);
  }
};
const Canceled = async (dataMod, setDataMod, updateApi, navigation) => {
  const dataUpdate = {
    requestAdoptionId: dataMod.requestAdoptionId,
    hasPets: dataMod.hasPets,
    isApproved: dataMod.isApproved,
    isActive: false,
    isRejected: dataMod.isRejected,
  };
  setDataMod({ ...dataMod, isActive: false });
  const res = await updateApi.request(dataUpdate);
  if (res.ok) {
    alert("Solicitud de adopción ha sido cancelada");
    navigation.goBack();
  }
};
export default { dataHook, Approved, Rejected, updateSwitch, Canceled };
