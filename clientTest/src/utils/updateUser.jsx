import axios from "axios";

export const updateUser = async (userData) => {
  const { id } = userData
  const res = await axios.put(`http://localhost:8000/api/user/${id}`, userData);
  const data = res.data
  return data
}