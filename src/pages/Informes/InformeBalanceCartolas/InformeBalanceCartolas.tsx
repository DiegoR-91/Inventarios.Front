import PaginatedTable from "@/components/Table/PaginatedTable";
import { useState } from "react";
import { PaginationState, SortingState } from "@tanstack/react-table";
import Loading from "@/components/Loading/Loading";
import FiltrosInformeBalanceCartolas from "./FiltrosInformeBalanceCartolas";
import useGetInformeBalanceCartolas from "./hooks/useGetInformeBalanceCartolas";
import getInformeBalanceCartolasColumns from "./getInformeBalanceCartolasColumns";

const tableColumnsInformeBalanceCartolas = getInformeBalanceCartolasColumns();

const InformeBalanceCartolas = () => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 1,
    pageSize: 10,
  });
  const [rowSize, setRowSize] = useState<number>(10);
  const { data, isLoading } = useGetInformeBalanceCartolas(
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
        <FiltrosInformeBalanceCartolas />
        <div className="pt-5">
          <PaginatedTable
            columns={tableColumnsInformeBalanceCartolas}
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

export default InformeBalanceCartolas;
