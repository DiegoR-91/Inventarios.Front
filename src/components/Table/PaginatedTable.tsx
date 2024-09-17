import { useEffect, useMemo, useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { PaginatedTableProps } from "./interfaces";
import Loading from "../Loading/Loading";
import { cn } from "@/utils/cn";
import { Pagination } from "@nextui-org/react";
import { HiOutlineChevronUpDown } from "react-icons/hi2";

const PaginatedTable = <T,>({
  data,
  columns,
  isFetching,
  sorting,
  setSorting,
  pagination,
  setPagination,
  rowSize,
  setRowSize,
  setDataSelected,
}: PaginatedTableProps<T>) => {
  const defaultData = useMemo(() => [], []);
  const [activeRow, setActiveRow] = useState<number | null>(null);

  const table = useReactTable({
    data: data.results || defaultData,
    columns,
    rowCount: data?.totalPages,
    state: {
      pagination,
      sorting,
    },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
    onSortingChange: setSorting,
    debugTable: true,
  });

  const handleMouseEnter = (index: number) => {
    setActiveRow(index);
  };

  const handleMouseLeave = () => {
    setActiveRow(null);
  };

  useEffect(() => {
    setDataSelected && setDataSelected(table.getState().rowSelection);
  }, [table.getState().rowSelection]);

  return (
    <div className="flex w-full  max-w-full overflow-x-auto">
      <div className="flex flex-col bg-white p-4 rounded-md shadow-md">
        <table className="w-full table-fixed">
          <thead className="bg-white h-10 rounded-lg justify-center text-black/70 text-small">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <th
                      key={header.id}
                      colSpan={header.colSpan}
                      className="border-b-2 border-b-black px-1 py-4"
                      style={{ width: header.getSize() }}
                    >
                      {header.isPlaceholder ? null : (
                        <div
                          className={
                            header.column.getCanSort()
                              ? " flex cursor-pointer select-none items-center gap-2"
                              : "flex justify-center"
                          }
                          onClick={header.column.getToggleSortingHandler()}
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          {{
                            asc: <HiOutlineChevronUpDown />,
                            desc: <HiOutlineChevronUpDown />,
                          }[header.column.getIsSorted() as string] ?? null}
                        </div>
                      )}
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row, index) => {
              return (
                <tr
                  key={row.id}
                  className={cn(
                    "border-b-2  border-black/5",
                    activeRow === index ? "bg-greenBgSideItem" : ""
                  )}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <td key={cell.id} className="py-3 px-1">
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        {isFetching && <Loading size="sm" color="success" />}
        <div className="relative flex w-full  justify-start items-center gap-5 p-5 bg-white">
          <Pagination
            showControls
            total={data?.totalPages}
            initialPage={1}
            onChange={(page) => {
              table.setPageIndex(page);
            }}
            classNames={{ cursor: "bg-greenButton" }}
            size="sm"
          />
          <div className="flex">
            <span>Filas por página:</span>
            <select
              value={rowSize}
              onChange={(e) => {
                setRowSize(Number(e.target.value));
              }}
            >
              {[10, 20, 50, 100].map((rowSize) => (
                <option key={rowSize} value={rowSize}>
                  {rowSize}
                </option>
              ))}
            </select>
            <div className="absolute right-0 pr-2">
              {table.getRowModel().rows.length.toLocaleString()} de{" "}
              {data?.totalItems.toLocaleString()} Filas Mostradas
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaginatedTable;
