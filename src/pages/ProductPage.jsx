import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import { Table } from "flowbite-react";
import ProductItem from "../components/ProductItem";
import CreateForm from "../components/CreateForm";
import useSWR from "swr";
import Skeleton from "../components/Skeleton";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const ProductPage = () => {
  const { data, isLoading, error } = useSWR(
    `${import.meta.env.VITE_API_URL}/products`,
    fetcher
  );

  const skeletons = Array.from({ length: 5 }, (_, index) => index + 1);

  return (
    <div className="container">
      <Breadcrumb />
      <div className="overflow-x-auto">
        <CreateForm />
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>#</Table.HeadCell>
            <Table.HeadCell>TITLE</Table.HeadCell>
            <Table.HeadCell>PRICE(MMK)</Table.HeadCell>
            <Table.HeadCell>CREATED AT</Table.HeadCell>
            <Table.HeadCell>ACTION</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 hidden last:table-row">
              <Table.Cell colSpan={5} className="text-center">
                There is no data
              </Table.Cell>
            </Table.Row>
            {isLoading
              ? skeletons.map((ske, index) => <Skeleton key={index} />)
              : data.map((product) => (
                  <ProductItem key={product.id} product={product} />
                ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default ProductPage;
