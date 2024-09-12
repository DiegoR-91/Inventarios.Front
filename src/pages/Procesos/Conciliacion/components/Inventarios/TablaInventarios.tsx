import Loading from "@/components/Loading/Loading";
import PaginatedTable from "@/components/Table/PaginatedTable";
import { PaginationState, SortingState } from "@tanstack/react-table";
import { useState } from "react";
import getInventariosColumns from "./getInventariosColumns";
import useGetInventarios from "./hooks/useGetInventarios";

const tableColumnsInventarios = getInventariosColumns();

const TablaInventarios = () => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 1,
    pageSize: 10,
  });
  const [rowSize, setRowSize] = useState<number>(10);
  const { data, isLoading } = useGetInventarios(sorting, pagination, rowSize);
  if (isLoading)
    return (
      <div className="flex justify-center items-center">
        <Loading color="success" size="sm" />;
      </div>
    );
  if (!data) return;
  return (
    <div className="flex flex-col">
      <p className="text-lg  text-greenPrimaryButton">Inventarios</p>
      <div className="pt-5">
        <PaginatedTable
          columns={tableColumnsInventarios}
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
  );
};

export default TablaInventarios;
