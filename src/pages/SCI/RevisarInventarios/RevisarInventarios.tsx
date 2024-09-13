import PaginatedTable from "@/components/Table/PaginatedTable";
import getRevisarInventariosColumns from "./getRevisarInventariosColumns";
import { useState } from "react";
import { PaginationState, SortingState } from "@tanstack/react-table";
import useGetVerInventarios from "./hooks/useGetRevisarInventarios";
import Loading from "@/components/Loading/Loading";
import { TfiExport } from "react-icons/tfi";
import { IoIosSearch } from "react-icons/io";
import { TfiImport } from "react-icons/tfi";
import { TfiWrite } from "react-icons/tfi";
import { BiMessageError } from "react-icons/bi";
import { IoCloseOutline } from "react-icons/io5";
import ButtonLeftIcon from "@/components/Button/ButtonLeftIcon";

const tableColumnsRevisarInventarios = getRevisarInventariosColumns();

const RevisarInventarios = () => {
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
            name="Consultar"
            icon={<IoIosSearch size={20} />}
            classname="bg-greenSecondaryButton text-white rounded-md"
          />
          <ButtonLeftIcon
            name="Guardar"
            icon={<TfiImport />}
            classname="bg-greenSecondaryButton text-white rounded-md"
          />
          <ButtonLeftIcon
            name="Solicitar Aprobación"
            icon={<TfiWrite />}
            classname="bg-greenSecondaryButton text-white rounded-md"
          />
          <ButtonLeftIcon
            name="Notificar Rechazos"
            icon={<BiMessageError size={20} />}
            classname="bg-greenSecondaryButton text-white rounded-md"
          />
          <ButtonLeftIcon
            name="Cancelar"
            icon={<IoCloseOutline size={22} />}
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
            columns={tableColumnsRevisarInventarios}
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

export default RevisarInventarios;
