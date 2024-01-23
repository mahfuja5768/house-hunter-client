import { FaList } from "react-icons/fa";
import MenuItem from "./MenuItem";


const UserMenu = () => {
    return (
        <>
             <MenuItem
                icon={FaList}
                label={"Booked Properties"}
                address="/dashboard/bookedProperties"
              ></MenuItem>
        </>
    );
};

export default UserMenu;