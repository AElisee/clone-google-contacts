import React from "react";
import { GoPlus } from "react-icons/go";
import { FaUser } from "react-icons/fa6";
import { LuBookDown } from "react-icons/lu";
import { VscHistory } from "react-icons/vsc";
import { NavLink } from "react-router";
import { Tooltip } from "@mui/material";
import { LuInfo } from "react-icons/lu";
import { MdHandyman } from "react-icons/md";
import { FiDownload } from "react-icons/fi";
import { BsTrash3Fill } from "react-icons/bs";
import IconButton from "@mui/material/IconButton";
const SideBar = () => {
  return (
    <div className="w-[23vw] min-h-screen p-3 px-4 pt-0 bg-white">
      <div className="sticky top-[70px]  bg-white w-[23vw] py-5">
        <div className="flex gap-3 p-3 py-4 pr-6 bg-sky-200 rounded-xl max-w-max items-center">
          <GoPlus className="w-6 h-6 font-semibold" />
          <span>Créer un contact</span>
        </div>
      </div>
      <div className="overflow-y-clip">
        <ul className="flex flex-col  w-full">
          <li className="flex">
            <NavLink
              to="/contacts"
              className={`${(isActive) =>
                isActive
                  ? "active"
                  : ""} flex items-center justify-between p-2 px-4 gap-3 w-[100%] rounded-3xl hover:bg-slate-200`}
            >
              <div className="flex gap-3 items-center">
                <FaUser className="w-5 h-5" />
                <span>Contacts</span>
              </div>
              <span className="text-sm text-slate-400 font-semibold">
                {126}
              </span>
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              to="/frequents"
              className={`${(isActive) =>
                isActive
                  ? "active"
                  : ""} flex items-center justify-between p-2 px-4 gap-3 w-[100%] rounded-3xl hover:bg-slate-200`}
            >
              <div className="flex gap-3 items-center">
                <VscHistory className="w-5 h-5 font-semibold" />
                <span>Fréquents</span>
              </div>
              {/* <span>{126}</span> */}
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              to="/others"
              className={`${(isActive) =>
                isActive
                  ? "active"
                  : ""} flex items-center justify-between p-2 px-4 gap-3 w-[100%] rounded-3xl hover:bg-slate-200`}
            >
              <div className="flex gap-3 items-center">
                <LuBookDown className="w-5 h-5 font-semibold" />
                <span>Autres contacts</span>
              </div>

              <IconButton className="w-[32px] h-[32px] rounded-full">
                <LuInfo />
              </IconButton>
            </NavLink>
          </li>
        </ul>
        <div className="pt-4">
          <p className="font-semibold pb-3 pl-3">Corriger et gérer</p>
          <ul className="flex flex-col  w-full">
            <li className="flex">
              <NavLink
                to="/suggestions"
                className={`${(isActive) =>
                  isActive
                    ? "active"
                    : ""} flex items-center justify-between p-2 px-4 gap-3 w-[100%] rounded-3xl hover:bg-slate-200`}
              >
                <div className="flex gap-3 items-center">
                  <MdHandyman className="w-6 h-6" />
                  <span className="text-sm">Fusionner et Corriger</span>
                </div>
                <span className="text-sm bg-red-600 rounded-full w-6 h-6 text-center text-white font-bold">
                  {3}
                </span>
              </NavLink>
            </li>
            <li className="flex">
              <NavLink
                to="/"
                className={`${(isActive) =>
                  isActive
                    ? "active"
                    : ""} flex items-center justify-between p-2 px-4 gap-3 w-[90%] rounded-3xl hover:bg-slate-200`}
              >
                <div className="flex gap-3 items-center">
                  <FiDownload className="w-6 h-6 font-semibold" />
                  <span>Importer</span>
                </div>
                {/* <span>{126}</span> */}
              </NavLink>
            </li>
            <li className="flex">
              <NavLink
                to="/trash"
                className={`${(isActive) =>
                  isActive
                    ? "active"
                    : ""} flex items-center justify-between p-2 px-4 gap-3 w-[90%] rounded-3xl hover:bg-slate-200`}
              >
                <div className="flex gap-3 items-center">
                  <BsTrash3Fill className="w-5 h-5 font-semibold" />
                  <span>Corbeille</span>
                </div>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="pt-4">
          <p className="font-semibold pb-3 pl-3 w-[100%] flex justify-between items-center">
            <span>Libellés</span>
            <Tooltip title="Créer un libellé ">
              <IconButton className="w-[45px] h-[45px] rounded-full">
                <GoPlus className="w-6 h-6 font-semibold" />
              </IconButton>
            </Tooltip>
          </p>
          <ul className="flex flex-col  w-full"></ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
