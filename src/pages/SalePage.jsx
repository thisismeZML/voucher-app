import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";
import SaleForm from "../components/SaleForm";
import VoucherTable from "../components/VoucherTable";
import { useVoucherStore } from "../store/useVoucherStore";
import useSWR, { useSWRConfig } from "swr";
import toast from "react-hot-toast";

const SalePage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const {records, resetRecord} = useVoucherStore();

  const {mutate} = useSWRConfig()

  const onSubmit = async (data) => {
    const total = records.reduce((pv,cv) => pv + cv.cost,0);
    const tax = total * 0.07;
    const netTotal = total + tax;

    await fetch(`${import.meta.env.VITE_API_URL}/vouchers`, {
      method : "POST",
      body: JSON.stringify({...data, records, total, tax, netTotal}),
      headers: {
        "Content-Type": "application/json",
      },
    })

    mutate(`${import.meta.env.VITE_API_URL}/vouchers`)

    resetRecord();
    reset();
    toast.success("Voucher was successfully confirmed")
  };

  const generateInvoiceNumber = () => {
    const date = new Date();

    const formatDate = date.toISOString().slice(0, 10).replace(/-/g, "");

    const randomNumber = Math.floor(1000 + Math.random() * 9000);

    const invoiceNumber = `INV-${formatDate}-${randomNumber}`;

    return invoiceNumber;
  };
  return (
    <div className=" container">
      <Breadcrumb />
      <form
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
        onSubmit={handleSubmit(onSubmit)}
        id="userForm"
      >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="voucher_id" value="Voucher ID" />
          </div>
          <TextInput
            id="voucher_id"
            type="text"
            sizing="base"
            {...register("voucher_id", {
              required: true,
            })}
            defaultValue={generateInvoiceNumber()}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="customer_name"
              value="Customer Name"
              className={`${errors.customer_name && "text-red-500"}`}
            />
          </div>
          <TextInput
            id="customer_name"
            type="text"
            sizing="base"
            {...register("customer_name", {
              required: true,
            })}
          />
          {errors.customer_name?.type === "required" && (
            <p className="text-red-500">Customer Name is required</p>
          )}
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="user_email"
              value="Email Address"
              className={`${errors.email_address && "text-red-500"}`}
            />
          </div>
          <TextInput
            id="user_email"
            type="text"
            sizing="base"
            {...register("email_address", {
              required: true,
            })}
          />
          {errors.email_address?.type === "required" && (
            <p className="text-red-500">Email Address is required</p>
          )}
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="sale_date" value="Sale Date" />
          </div>
          <TextInput
            id="sale_date"
            type="date"
            sizing="base"
            defaultValue={new Date().toISOString().slice(0, 10)}
            {...register("sale_date", {
              required: true,
            })}
          />
        </div>
      </form>
      <SaleForm/>
      <VoucherTable/>
      <div className="flex items-center justify-end mt-3">
        <Button form="userForm" type="submit" gradientMonochrome="purple">
          Confirm Voucher
        </Button>
      </div>
    </div>
  );
};

export default SalePage;
