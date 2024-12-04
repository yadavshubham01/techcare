import axios from "axios";

const API_URL = "https://fedskillstest.coalitiontechnologies.workers.dev";
const AUTH_USERNAME = "coalition";
const AUTH_PASSWORD = "skills-test";

export const fetchPatients = async () => {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: `Basic ${btoa(`${AUTH_USERNAME}:${AUTH_PASSWORD}`)}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching patients data:", error);
    throw error;
  }
};
