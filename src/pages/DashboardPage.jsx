import React from "react";
import Module from "../components/Module";
import { MdOutlinePointOfSale } from "react-icons/md";
import { GoDatabase } from "react-icons/go";


const DashboardPage = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        <Module
          title={"Products"}
          url={"product"}
          color={"bg-[#03d1c3]"}
          icon={<GoDatabase className="size-16 " />}
        />
        <Module
          title={"Sales"}
          url={"sale"}
          color={"bg-[#4b72f1]"}
          icon={<MdOutlinePointOfSale className="size-16" />}
        />
        <Module
          title={"Voucher"}
          url={"voucher"}
          color={"bg-[#f0854c]"}
          icon={<GoDatabase className="size-16" />}
        />
      </div>
    </div>
  );
};

export default DashboardPage;
