import PaginatedTable from "@/components/Table/PaginatedTable";
import { useState } from "react";
import { PaginationState, SortingState } from "@tanstack/react-table";
import Loading from "@/components/Loading/Loading";
import FiltrosInformeCartolasAjusteProd from "./FiltrosInformeCartolasAjusteProd";
import useGetInformeCartolasAjusteProd from "./hooks/useGetInformeCartolasAjusteProd";
import getInformeCartolasAjusteProdColumns from "./getInformeCartolasAjusteProdColumns";

const tableColumnsInformeAjustesProd = getInformeCartolasAjusteProdColumns();

const InformeCartolasAjusteProd = () => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 1,
    pageSize: 10,
  });
  const [rowSize, setRowSize] = useState<number>(10);
  const { data, isLoading } = useGetInformeCartolasAjusteProd(
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
        <FiltrosInformeCartolasAjusteProd />
        <div className="pt-5">
          <PaginatedTable
            columns={tableColumnsInformeAjustesProd}
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

export default InformeCartolasAjusteProd;
