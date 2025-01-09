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
import { FaUserGroup } from "react-icons/fa6";
import { useNavigate } from "react-router";
const TopBar = () => {
  const navigate = useNavigate();

  const AccountTitle = () => {
    return (
      <div>
        <p>compte Google </p>
        <p>Ange Kouassi</p>
        <p>angekouame5141@gmail.com</p>
      </div>
    );
  };

  return (
    <div className="h-[70px] p-3 px-4 flex gap-3 sticky top-0 left-0 z-30">
      <div className="w-[23%] flex items-center py-2 ">
        <Tooltip title="Menu principal">
          <IconButton className="w-[45px] h-[45px] rounded-full">
            <IoMenuSharp />
          </IconButton>
        </Tooltip>
        <div className="flex gap-3 items-center">
          <FaUserGroup className="h-8 w-8 text-blue-800" />
          <p
            className="text-2xl font-normal text-gray-600"
            onClick={() => navigate("/")}
          >
            Conatcts
          </p>
        </div>
      </div>
      <div className="w-[55%] bg-neutral-100 flex p-2 rounded-lg shadow-sm gap-3 items-center ">
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
      <div className="w-[22%] flex gap-2 justify-around pl-5">
        <div>
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
        </div>
        <div className="flex gap-3">
          <Tooltip title="Applications Google">
            <IconButton className="w-[45px] h-[45px] rounded-full">
              <IoApps />
            </IconButton>
          </Tooltip>
          <Tooltip title={<AccountTitle />}>
            <IconButton className="w-[45px] h-[45px] rounded-full">
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </IconButton>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
