import {
  FaList,
  FaUserAlt,
} from "react-icons/fa";
import MenuItem from "./MenuItem";
import { IoMdAddCircle } from "react-icons/io";

const AdminMenu = () => {
  return (
    <>
      <MenuItem
        icon={FaList}
        label={" My Properties"}
        address="/dashboard/adminAddedProperty"
      ></MenuItem>
      <MenuItem
        icon={IoMdAddCircle}
        label={"Add New Properties"}
        address="/dashboard/addProperties"
      ></MenuItem>
    </>
  );
};

export default AdminMenu;
