import PaginatedTable from "@/components/Table/PaginatedTable";
import getVerInventariosColumns from "./getVerInventariosColumns";
import { useState } from "react";
import { PaginationState, SortingState } from "@tanstack/react-table";
import useGetVerInventarios from "./hooks/useGetVerInventarios";
import Loading from "@/components/Loading/Loading";
import { IoEyeOutline } from "react-icons/io5";
import { TfiExport } from "react-icons/tfi";
import ButtonLeftIcon from "@/components/Button/ButtonLeftIcon";

const tableColumnsVerInventarios = getVerInventariosColumns();

const VerInventarios = () => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 1,
    pageSize: 10,
  });
  const [rowSize, setRowSize] = useState<number>(10);
  const { data, isLoading } = useGetVerInventarios(
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
        <div className="flex w-full gap-4">
          <ButtonLeftIcon
            name="Revisar"
            icon={<IoEyeOutline />}
            classname="bg-greenSecondaryButton text-white rounded-md"
          />
          <ButtonLeftIcon
            name="Exportar"
            icon={<TfiExport />}
            classname="bg-greenSecondaryButton text-white rounded-md"
          />
        </div>
        <div className="pt-5">
          <PaginatedTable
            columns={tableColumnsVerInventarios}
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

export default VerInventarios;
