import axios from "axios";

export const getPlacesData = async (type, sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-by-latlng`,
      {
        params: {
          latitude: "12.91285",
          longitude: "100.87808",
          limit: "30",
          currency: "USD",
          distance: "2",
          open_now: "false",
          lunit: "km",
          lang: "en_US",
        },
        headers: {
          "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
          "x-rapidapi-key": process.env.REACT_APP_RAPID_API_TRAVEL_API_KEY,
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
