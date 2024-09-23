import { Button, Table } from "flowbite-react";
import React, { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useSWRConfig } from "swr";
import { dotPulse } from "ldrs";
import { Link } from "react-router-dom";

dotPulse.register();

const ProductItem = ({ product: { id, product_name, price, created_at } }) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const date = new Date(created_at);

  const currentDate = date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const currentTime = date.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  const { mutate } = useSWRConfig();

  const handleDelte = async () => {
    setIsDeleting(true);
    await fetch(`${import.meta.env.VITE_API_URL}/products/${id}`, {
      method: "DELETE",
    });

    mutate(`${import.meta.env.VITE_API_URL}/products`);
  };

  return (
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        {id}
      </Table.Cell>
      <Table.Cell>{product_name}</Table.Cell>
      <Table.Cell>{price}</Table.Cell>
      <Table.Cell>
        <p>{currentDate}</p>
        <p>{currentTime}</p>
      </Table.Cell>
      <Table.Cell className="flex items-center gap-3">
        <Button.Group>
          <Link to={`${id}`}>
            <Button
              color="gray"
              className="size-10 flex items-center justify-center"
            >
              <CiEdit />
            </Button>
          </Link>
          <Button
            onClick={handleDelte}
            color="gray"
            className="size-10 flex items-center justify-center"
          >
            {isDeleting ? (
              <l-dot-pulse size="20" speed="1.3" color="black"></l-dot-pulse>
            ) : (
              <RiDeleteBin6Line color="red" />
            )}
          </Button>
        </Button.Group>
      </Table.Cell>
    </Table.Row>
  );
};

export default ProductItem;
