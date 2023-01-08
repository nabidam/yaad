import Plus from "../icons/Plus";
import RegularButton from "./RegularButton";

const NewItemButton = () => {
  return (
    <RegularButton>
      <Plus /> <span className="leading-5">New Note</span>
    </RegularButton>
  );
};

export default NewItemButton;
