import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:4000",
  timeout: 1000,
});

export const getProfile = async () => {
  try {
    const data = await instance.get("/profile");
    console.log("[SUCCESS] GET profile");
    return data.data;
  } catch (e) {
    console.log("[FAIL] GET profile");
    return null;
  }
};
