import React from "react";
import { Button, Checkbox, Label, Select, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";
import useSWR from "swr";
import { useVoucherStore } from "../store/useVoucherStore";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const SaleForm = () => {
  const { records, addRecord, updateQuantity } = useVoucherStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const currentProduct = JSON.parse(data.product);

    const existingRecord = records.find(
      ({ product: { id } }) => currentProduct.id === id
    );

    const newRecord = {
      id: Date.now(),
      product: currentProduct,
      quantity: data.quantity,
      price: currentProduct.price,
      cost: parseInt(currentProduct.price) * parseInt(data.quantity),
      created_at: new Date().toISOString(),
    };

    if (!existingRecord) {
      addRecord(newRecord);
    } else {
      updateQuantity(existingRecord.id, data.quantity);
    }

    reset();
  };

  const { data, isLoading, error } = useSWR(
    `${import.meta.env.VITE_API_URL}/products`,
    fetcher
  );
  return (
    <form
      className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 my-11"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <div className="mb-2 block">
          <Label htmlFor="product_name" value="Select Your Product" />
        </div>
        <Select
          id="countries"
          required
          {...register("product", {
            required: true,
          })}
        >
          <option value="">Choose one product</option>
          {data?.map((product) => (
            <option key={product.id} value={JSON.stringify(product)}>
              {product.product_name}
            </option>
          ))}
        </Select>
      </div>
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="quantity"
            value="Quantity"
            className={`${errors.quantity && "text-red-500"}`}
          />
        </div>
        <TextInput
          id="quantity"
          type="number"
          sizing="base"
          {...register("quantity", {
            required: true,
          })}
        />
        {errors.quantity?.type === "required" && (
          <p className="text-red-500">Customer Name is required</p>
        )}
      </div>
      <Button color="dark" type="submit" className="flex items-center">
        Submit
      </Button>
    </form>
  );
};

export default SaleForm;
