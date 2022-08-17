import React from "react";
import { Link, useMatch } from "react-router-dom";

export default function Header() {
  const [edit, setEdit] = React.useState(false);
  const [home, setHome] = React.useState(true);

  const uploadHomeIcon = (
    <svg
      className={`${
        home
          ? "fill-green-400"
          : "fill-gray-600 group-hover:fill-black group-focus:fill-black"
      } ml-6 md:ml-0`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M7 20.981a6.5 6.5 0 0 1-2.936-12 8.001 8.001 0 0 1 15.872 0 6.5 6.5 0 0 1-2.936 12V21H7v-.019zM13 13h3l-4-5-4 5h3v4h2v-4z" />
    </svg>
  );
  const storageIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={` ${
        edit
          ? "fill-green-400"
          : "fill-gray-600 group-hover:fill-black group-focus:fill-black"
      } ml-4 md:ml-0 `}
      viewBox="0 0 24 24"
      width="24"
      height="24"
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M21 9.5v3c0 2.485-4.03 4.5-9 4.5s-9-2.015-9-4.5v-3c0 2.485 4.03 4.5 9 4.5s9-2.015 9-4.5zm-18 5c0 2.485 4.03 4.5 9 4.5s9-2.015 9-4.5v3c0 2.485-4.03 4.5-9 4.5s-9-2.015-9-4.5v-3zm9-2.5c-4.97 0-9-2.015-9-4.5S7.03 3 12 3s9 2.015 9 4.5-4.03 4.5-9 4.5z" />
    </svg>
  );

  const storeIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      className="fill-white"
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M22 20v2H2v-2h1v-6.758A4.496 4.496 0 0 1 1 9.5c0-.827.224-1.624.633-2.303L4.345 2.5a1 1 0 0 1 .866-.5H18.79a1 1 0 0 1 .866.5l2.702 4.682A4.496 4.496 0 0 1 21 13.242V20h1zM5.789 4L3.356 8.213a2.5 2.5 0 0 0 4.466 2.216c.335-.837 1.52-.837 1.856 0a2.5 2.5 0 0 0 4.644 0c.335-.837 1.52-.837 1.856 0a2.5 2.5 0 1 0 4.457-2.232L18.21 4H5.79z" />
    </svg>
  );

  return (
    <div className="w-screen h-12 py-2 bg-white flex pt-6 pb-14 justify-center mt-10 bg-gray-100 p-8 relative">
      <Link to="/">
        <button
          onClick={() => {
            setEdit(false);
            setHome(true);
          }}
          className="mr-3 items-center md:flex justify-center group border p-1 border-gray-400 rounded-lg hover:border-black"
        >
          <div className="text-xs mr-2 text-gray-600 group-hover:text-black">
            {" "}
            Upload Item
          </div>
          {uploadHomeIcon}
        </button>
      </Link>

      <Link to="edit">
        <button
          onClick={() => {
            setEdit(true);
            setHome(false);
          }}
          className="ml-2 md:flex items-center justify-center group p-1 rounded-lg border border-gray-400 hover:border-black"
        >
          <div className="text-xs mr-2 text-gray-600 group-hover:text-black">
            Edit Item
          </div>
          {storageIcon}
        </button>
      </Link>
      <a
        href="https://luminous-panda-691ede.netlify.app/"
        className="absolute right-0 p-2  top-2 text-xs text-white  md:w-32 bg-green-400 rounded-l md:font-bold flex-col flex md:block"
      >
        {storeIcon}
        <p className="hidden md:block">
          {" "}
          Access the store that uses this backend
        </p>
        <p className="md:hidden font-bold">Access store</p>
      </a>
    </div>
  );
}
