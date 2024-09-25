import React, { useState } from "react";
import { Button, Table } from "flowbite-react";
import { dotPulse } from "ldrs";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useVoucherStore } from "../store/useVoucherStore";
import VoucherList from "./VoucherList";

dotPulse.register();

const VoucherTable = () => {
  const { records } = useVoucherStore();

  const total = records.reduce((pv,cv) => pv + cv.cost,0);
  const tax = total * 0.07;
  const netTotal = total + tax;

  return (
    <div className="overflow-x-auto">
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>#</Table.HeadCell>
          <Table.HeadCell>Product name</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>Quantity</Table.HeadCell>
          <Table.HeadCell>Cost</Table.HeadCell>
          <Table.HeadCell>Action</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {records.map((record, index) => (
            <VoucherList key={record.id} record={record} index={index} />
          ))}
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell colSpan={4} className="whitespace-nowrap text-end font-medium text-gray-900 dark:text-white">
              Total
            </Table.Cell>
            <Table.Cell colSpan={2}>${total.toFixed(2)}</Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell colSpan={4} className="whitespace-nowrap text-end font-medium text-gray-900 dark:text-white">
              Tax (7%)
            </Table.Cell>
            <Table.Cell colSpan={2}>${tax.toFixed(2)}</Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell colSpan={4} className="whitespace-nowrap text-end font-medium text-gray-900 dark:text-white">
              Net Total
            </Table.Cell>
            <Table.Cell colSpan={2}>${netTotal.toFixed(2)}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
};

export default VoucherTable;
