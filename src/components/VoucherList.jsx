import { Button, Table } from "flowbite-react";
import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useVoucherStore } from "../store/useVoucherStore";

const VoucherList = ({
  record: {
    id,
    price,
    cost,
    quantity,
    product: { product_name },
  },
  index,
}) => {
  const { deleteRecord, updateQuantity } = useVoucherStore();

  const plusQuantity = () => {
    updateQuantity(id, 1);
  };

  const minusQuantity = () => {
    if (quantity > 1) {
      updateQuantity(id, -1);
    }
    return;
  };

  return (
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 group">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        {index + 1}
      </Table.Cell>
      <Table.Cell>{product_name}</Table.Cell>
      <Table.Cell>{price}</Table.Cell>
      <Table.Cell className="flex items-center gap-3">
        <Button
          onClick={minusQuantity}
          size="sm"
          color="gray"
          className=" -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 duration-200 transition-all"
        >
          -
        </Button>
        <span>{quantity}</span>
        <Button
          onClick={plusQuantity}
          className=" translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 duration-200 transition-all"
          size="sm"
          color="gray"
        >
          +
        </Button>
      </Table.Cell>
      <Table.Cell>${cost}</Table.Cell>
      <Table.Cell className="flex items-center gap-3">
        <Button
          onClick={() => deleteRecord(id)}
          color="gray"
          className="size-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200"
        >
          <RiDeleteBin6Line color="red" />
        </Button>
      </Table.Cell>
    </Table.Row>
  );
};

export default VoucherList;
