import axios from "axios";

export const getUserLocation = async () => {
  const url = "https://ipgeolocation.abstractapi.com/v1/?api_key=1330303f6957465688a72807d94d0c72";

  let data = "null";

  await axios.get(url).then((response: any) => {
    if (response.status === 200) {
      data = `${response.data.country}/${response.data.city}`;
    }
  });

  return data;
};
