import { useState } from "react";
import server from "../service/server";

export default imagePickerApi = () => {
  const [image, setImage] = useState();
  const [data, setData] = useState();

  const imageProfile = (item) => {
    if (item) {
      if (item.profileHouseId) {
        setData({
          ...data,
          profileHouseId: item.profileHouseId,
          file: null,
        });
        if (item.image != null) {
          const uri = server.URI + "/HouseImageProfile/" + item.image;
          setImage(uri);
        }
      } else {
        setData({
          ...data,
          userId: item.userId,
          email: item.email,
          file: null,
        });

        if (item.image != "null") {
          const uri = server.URI + "/UserImageProfile/" + item.image;

          setImage(uri);
        }
      }
    }
  };

  return { data, setImage, image, imageProfile };
};
