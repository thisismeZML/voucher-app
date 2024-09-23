import React, { useState } from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import Breadcrumb from "../components/Breadcrumb";
import { useForm } from "react-hook-form";
import { tailChase } from "ldrs";
import toast from "react-hot-toast";

tailChase.register();

const CreateProductPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    await fetch(`${import.meta.env.VITE_API_URL}/products`, {
      method: "POST",
      body: JSON.stringify({
        product_name: data.product_name,
        price: data.price,
        created_at: new Date().toISOString(),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    reset()
    toast.success("Successfully Added")
    setIsLoading(false);
  };

  return (
    <div className="container">
      <form
        onSubmit={handleSubmit(onSubmit)}
        action=""
        className="flex max-w-md flex-col gap-7"
      >
        <Breadcrumb />
        <h1 className="text-2xl font-bold">Create Product</h1>

        <div className="">
          <div className="mb-2 block">
            <Label
              htmlFor="name"
              value="New Product Name"
              className={`${errors.product_name && "text-red-500"}`}
            />
          </div>
          <TextInput
            id="name"
            type="text"
            placeholder="Eg. Services"
            {...register("product_name", {
              required: true,
              minLength: 3,
              maxLength: 30,
            })}
          />
          {errors.product_name?.type === "required" && (
            <p className="text-red-500">Product Name is required</p>
          )}
          {errors.product_name?.type === "minLength" && (
            <p className="text-red-500">
              Product Name must be contain at least 3 words
            </p>
          )}
          {errors.product_name?.type === "maxLength" && (
            <p className="text-red-500">
              Product Name must be contain max 30 words
            </p>
          )}
        </div>

        <div className="">
          <div className="mb-2 block">
            <Label
              htmlFor="price"
              value="Product Price"
              className={`${errors.price && "text-red-500"}`}
            />
          </div>
          <TextInput
            id="price"
            type="number"
            placeholder="eg. 200"
            {...register("price", { required: true, maxLength: 4 })}
          />
          {errors.price?.type === "required" && (
            <p className="text-red-500">Product Price is required</p>
          )}
          {errors.price?.type === "maxLength" && (
            <p className="text-red-500">
              Product Price must be contain max 4 digit
            </p>
          )}
        </div>

        <div className="flex items-center gap-2">
          <Checkbox
            id="data_require"
            {...register("make_sure_check", {
              required: "require",
            })}
          />
          <Label htmlFor="data_require">Make sure correct data</Label>
          {errors.make_sure_check && (
            <p role="alert" className="text-red-500 block">
              {errors.make_sure_check.message}
            </p>
          )}
        </div>

        <Button
          type="submit"
          className="flex items-center justify-center space-x-5"
        >
          {isLoading ? (
            <span className="flex items-center gap-2">
              <l-tail-chase size="20" speed="1.75" color="white"></l-tail-chase>
              Loading
            </span>
          ) : (
            <span>Submit</span>
          )}
        </Button>
      </form>
    </div>
  );
};

export default CreateProductPage;
