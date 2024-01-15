import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchUser } from "../../../utils/fetchUser";
import { FormUser } from "../formUser";
import { updateUser } from "../../../utils/updateUser";

export const FormUserUpdate = () => {
  const { id } = useParams();
  const userFromRedux = useSelector((state) =>
    state.users.users.find((u) => u.id === id)
  );
  const [user, setUser] = useState(userFromRedux);


  useEffect(() => {
    if (user) return;

    const loadUser = async () => {
      const userFromServer = await fetchUser(id);
      setUser(userFromServer);
    };

    loadUser();
  }, [user]);

  if (!user) return <div>loading...</div>;

  const handleChange = (userData) => {
   const formData = {id, ...userData}
    updateUser(formData)
  };

  return <FormUser value={user} onChange={handleChange} />;
};
