import axios from "axios";

export const fetchUser = async (id) => {
  const res = await axios.get(`http://localhost:8000/api/user/${id}`);
  const data = await res.data;
  return data;
};
