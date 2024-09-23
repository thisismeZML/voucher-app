import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { BiPlus, BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";

const CreateForm = () => {
  return (
    <div className="flex md:flex-row flex-col md:justify-between md:items-center mb-[30px] gap-6 md:gap-0">
      <div className="w-[400px]">
        <TextInput
          id="search"
          type="search"
          icon={BiSearch}
          placeholder="Search"
        />
      </div>
      <div>
        <Link to={'create'}>
          <Button className="bg-blue-600">
            Add New Product
            <BiPlus className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CreateForm;
