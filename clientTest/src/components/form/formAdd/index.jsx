import { useDispatch } from "react-redux";
import { addUsers } from "../../../store/usersSlice";
import { FormUser } from "../formUser";

const FormAdd = () => {
  const formData = {
    name: "",
    surname: "",
    patronymic: "",
    email: "",
    date: "",
    imj: "",
  };

  const dispatch = useDispatch();

  const handleChange = (userData) => {
    dispatch(addUsers(userData));
  };

  return <FormUser value={formData} onChange={handleChange} />;
};

export { FormAdd };
