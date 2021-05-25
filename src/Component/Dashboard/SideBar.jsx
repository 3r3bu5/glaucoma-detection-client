/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

import NotificationDropdown from "./Dropdown/NotificationDropdown";
import UserDropdown from "./Dropdown/UserDropdown";
import logo from '../../Assests/svg/logo.svg'

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
          </button>
          {/* Brand */}
          <Link
            className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
            to="/"
          >
            <img className="h-8" src={logo} alt="" width="auto" />
          </Link>
          {/* User */}
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              <NotificationDropdown />
            </li>
            <li className="inline-block relative">
              <UserDropdown />
            </li>
          </ul>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />

            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <Link
                  className={
                    " text-sm uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/profile/dashboard") !== -1
                      ? "text-moody-blue-200 hover:text-moody-blue-500"
                      : "text-gray-800 hover:text-blue-500")
                  }
                  to="/profile/dashboard"
                >
                  Dashboard
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className={
                    " text-sm uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/profile/patient") !== -1
                      ? "text-moody-blue-200 hover:text-moody-blue-500"
                      : "text-gray-800 hover:text-blue-500")
                  }
                  to="/profile/patient"
                >
                  Patient
                </Link>
              </li>

                <Link
                  className={
                    " text-sm uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/profile/credits") !== -1
                      ? "text-moody-blue-200 hover:text-moody-blue-500"
                      : "text-gray-800 hover:text-blue-500")
                  }
                  to="/profile/credits"
                >
                  Credits
                </Link>
            </ul>

          </div>
        </div>
      </nav>
    </>
  );
}
