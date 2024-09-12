import PaginatedTable from "@/components/Table/PaginatedTable";
import FiltrosCartolas from "./FiltrosCartolas";
import getMantencionCartolasColumns from "./getMantencionCartolasColumns";
import { useState } from "react";
import { PaginationState, SortingState } from "@tanstack/react-table";
import useGetMantencionCartolas from "./hooks/useGetMantencionCartolas";
import Loading from "@/components/Loading/Loading";

const tableColumnsCartolas = getMantencionCartolasColumns();

const MantencionCartolas = () => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 1,
    pageSize: 10,
  });
  const [rowSize, setRowSize] = useState<number>(10);
  const { data, isLoading } = useGetMantencionCartolas(
    sorting,
    pagination,
    rowSize
  );
  if (isLoading)
    return (
      <div className="flex justify-center items-center">
        <Loading color="success" size="sm" />;
      </div>
    );
  if (!data) return;

  return (
    <div className="flex w-full h-full pt-5">
      <div className="flex flex-col w-full h-full">
        <FiltrosCartolas />
        <div className="pt-5">
          <PaginatedTable
            columns={tableColumnsCartolas}
            data={data}
            sorting={sorting}
            setSorting={setSorting}
            pagination={pagination}
            setPagination={setPagination}
            rowSize={rowSize}
            setRowSize={setRowSize}
          />
        </div>
      </div>
    </div>
  );
};

export default MantencionCartolas;
