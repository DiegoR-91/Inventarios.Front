import PaginatedTable from "@/components/Table/PaginatedTable";
import FiltrosEliminarProcesos from "./FiltrosEliminarProcesos";
import { useState } from "react";
import { PaginationState, SortingState } from "@tanstack/react-table";
import Loading from "@/components/Loading/Loading";
import getEliminarProcesosColumns from "./getEliminarProcesosColumns";
import useGetEliminarProcesos from "./hooks/useGetEliminarProcesos";
import ButtonCustom from "@/components/Button/ButtonCustom";

const tableColumnsEliminarProcesos = getEliminarProcesosColumns();

const EliminarProcesos = () => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 1,
    pageSize: 10,
  });
  const [rowSize, setRowSize] = useState<number>(10);
  const { data, isLoading } = useGetEliminarProcesos(
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
        <FiltrosEliminarProcesos />
        <div className="flex flex-col pt-5 gap-4">
          <PaginatedTable
            columns={tableColumnsEliminarProcesos}
            data={data}
            sorting={sorting}
            setSorting={setSorting}
            pagination={pagination}
            setPagination={setPagination}
            rowSize={rowSize}
            setRowSize={setRowSize}
          />
          <div>
            <ButtonCustom
              title="Eliminar Seleccionados"
              className="bg-greenSecondaryButton text-white rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EliminarProcesos;
