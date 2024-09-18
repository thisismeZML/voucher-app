import { Card } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const Module = ({ title, url, color, icon }) => {
  return (
    <Link to={url}>
      <Card
        href="#"
        className={`w-full ${color} flex flex-col items-center gap-2 justify-center h-[300px]`}
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex items-center justify-center">
          {icon}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400 text-2xl">
          {title}
        </p>
      </Card>
    </Link>
  );
};

export default Module;
