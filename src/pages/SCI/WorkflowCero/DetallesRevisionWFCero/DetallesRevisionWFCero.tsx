import PaginatedTable from "@/components/Table/PaginatedTable";
import getDetallesRevisionColumns from "./getDetallesRevisionColumns";
import { useState } from "react";
import { PaginationState, SortingState } from "@tanstack/react-table";
import useGetDetallesRevisionWFCero from "./hooks/useGetDetallesRevisionWFCero";
import Loading from "@/components/Loading/Loading";
import { TfiExport } from "react-icons/tfi";
import { IoIosSearch } from "react-icons/io";
import { TfiImport } from "react-icons/tfi";
import { TfiWrite } from "react-icons/tfi";
import { BiMessageError } from "react-icons/bi";
import { IoCloseOutline } from "react-icons/io5";
import ButtonLeftIcon from "@/components/Button/ButtonLeftIcon";
import { Divider } from "@nextui-org/react";
import ButtonCustom from "@/components/Button/ButtonCustom";

const tableColumnsDetallesRevisionColumns = getDetallesRevisionColumns();

const DetallesRevisionWFCero = () => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 1,
    pageSize: 10,
  });
  const [rowSize, setRowSize] = useState<number>(10);
  const { data, isLoading } = useGetDetallesRevisionWFCero(
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
      <div className="flex flex-col w-full h-full gap-5">
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
            name="Eliminar Proceso"
            icon={<IoCloseOutline size={22} />}
            classname="bg-greenSecondaryButton text-white rounded-md"
          />
          <ButtonLeftIcon
            name="Cancelar"
            icon={<IoCloseOutline size={22} />}
            classname="bg-red-500 text-white rounded-md"
          />
        </div>
        <div className="flex gap-5">
          <div className="flex gap-2">
            <span>Periodo</span>
            <input type="text" />
          </div>
          <div className="flex gap-2">
            <span>Descripción</span>
            <input type="text" />
          </div>
        </div>
        <Divider />
        <div className="flex flex-col gap-4">
          <span className="text-greenSecondaryButton">
            Análisis resultado de inventarios
          </span>
          <div className="flex gap-5">
            <ButtonCustom
              title="Detalle"
              className="bg-greenActiveSideItem text-white rounded-md"
            />
            <ButtonCustom
              title="Config. filtros"
              className="bg-greenSecondaryButton text-white rounded-md"
            />
            <ButtonCustom
              title="Config. columnas"
              className="bg-greenSecondaryButton text-white rounded-md"
            />
          </div>
        </div>
        <div className="pt-5">
          <PaginatedTable
            columns={tableColumnsDetallesRevisionColumns}
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

export default DetallesRevisionWFCero;
