import axios from "axios";

const mainUrl = "https://api.github.com/orgs/BoomTownROI/";

export const getData = async (url) => {
  try {
    const response = await axios({
      method: "get",
      url: `${mainUrl}${url}`,
    });
    return response.data;
    
  } catch (err) {
    console.error(err);
    throw err;
  }
};
