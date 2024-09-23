import { Table } from 'flowbite-react'
import React from 'react'

const Skeleton = () => {
  return (
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 animate-pulse">
  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
    <div className="h-4 w-6 bg-gray-200 dark:bg-gray-600 rounded"></div>
  </Table.Cell>

  <Table.Cell>
    <div className="h-4 w-20 bg-gray-200 dark:bg-gray-600 rounded"></div>
  </Table.Cell>

  <Table.Cell>
    <div className="h-4 w-12 bg-gray-200 dark:bg-gray-600 rounded"></div>
  </Table.Cell>

  <Table.Cell>
    <div className="h-4 w-24 bg-gray-200 dark:bg-gray-600 rounded mb-2"></div>
    <div className="h-4 w-16 bg-gray-200 dark:bg-gray-600 rounded"></div>
  </Table.Cell>

  <Table.Cell className="flex items-center gap-3">
    <div className="flex gap-2">
      <div className="h-8 w-8 bg-gray-200 dark:bg-gray-600 rounded-full"></div>
      <div className="h-8 w-8 bg-gray-200 dark:bg-gray-600 rounded-full"></div>
    </div>
  </Table.Cell>
</Table.Row>

  )
}

export default Skeleton