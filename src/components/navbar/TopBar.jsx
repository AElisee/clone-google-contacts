import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import { useState } from "react";
import { GoSearch } from "react-icons/go";
import { IoHelpCircleOutline } from "react-icons/io5";
import { RiSettings3Line } from "react-icons/ri";
import { IoApps } from "react-icons/io5";
import { IoMenuSharp } from "react-icons/io5";
const TopBar = () => {
  const [searchFocus, setFearchFocus] = useState(false);

  return (
    <div className="h-[70px] p-3 flex gap-3">
      <div className="w-1/5 flex items-center p-2 ">
        <Tooltip title="Menu principal">
          <IconButton className="w-[45px] h-[45px] rounded-full">
            <IoMenuSharp />
          </IconButton>
        </Tooltip>
        <div>
          <p className="text-2xl font-normal text-gray-600">Conatcts</p>
        </div>
      </div>
      <div className="w-3/5 bg-neutral-100 flex p-2 rounded-t-lg shadow-sm gap-3 items-center ">
        <Tooltip title="Recherche">
          <div className="rounded-full  w-[40px] h-[40px] hover:bg-gray-200 flex justify-center items-center">
            <GoSearch className="w-5 h-5" />
          </div>
        </Tooltip>
        <input
          className="flex-1 h-full outline-none border-none bg-transparent"
          type="text"
          placeholder="Recherche"
        />
      </div>
      <div className="w-1/5 flex gap-2 justify-around">
        <Tooltip title='Menu "aide" '>
          <IconButton className="w-[45px] h-[45px] rounded-full">
            <IoHelpCircleOutline />
          </IconButton>
        </Tooltip>
        <Tooltip title='Menu "paramètres" '>
          <IconButton className="w-[45px] h-[45px] rounded-full">
            <RiSettings3Line />
          </IconButton>
        </Tooltip>
        <Tooltip title="Applications Google">
          <IconButton className="w-[45px] h-[45px] rounded-full">
            <IoApps />
          </IconButton>
        </Tooltip>
        <Tooltip
          title="compte Google  
        Ange Kouassi
        angekouame5141@gmail.com"
        >
          <IconButton className="w-[45px] h-[45px] rounded-full">
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </IconButton>
        </Tooltip>
      </div>
    </div>
  );
};

export default TopBar;
