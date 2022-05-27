import React from "react";
import { Link } from "react-router-dom";

export default function NotFound(){
    return <div>
                <h1 className="text-3xl ml-6 text-blue-500 p-24 md:text-6xl">Please Login. This page is locked</h1>
                <button className="p-5 bg-blue-500 text-white">
                    <Link to="/">Redirect to Login</Link>
                </button>

             </div>
}