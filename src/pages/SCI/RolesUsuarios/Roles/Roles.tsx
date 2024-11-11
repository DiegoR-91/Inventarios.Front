import PaginatedTable from "@/components/Table/PaginatedTable";

import { useState } from "react";
import { PaginationState, SortingState } from "@tanstack/react-table";

import Loading from "@/components/Loading/Loading";
import { IoEyeOutline } from "react-icons/io5";
import ButtonLeftIcon from "@/components/Button/ButtonLeftIcon";
import { useNavigate } from "react-router-dom";
import ButtonCustom from "@/components/Button/ButtonCustom";
import { HiMiniPlusSmall } from "react-icons/hi2";
import getSCIRolesColumns from "./getSCIRolesColumns";
import useGetSCIRoles from "./hooks/useGetSCIRoles";

const tableColumnsSCIRoles = getSCIRolesColumns();

const Roles = () => {
  const navigate = useNavigate();
  const [sorting, setSorting] = useState<SortingState>([]);
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 1,
    pageSize: 10,
  });
  const [rowSize, setRowSize] = useState<number>(10);
  const { data, isLoading } = useGetSCIRoles(sorting, pagination, rowSize);
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
          <div className="flex gap-4">
            <ButtonLeftIcon
              name="Agregar Nuevo"
              icon={<HiMiniPlusSmall />}
              classname="bg-greenPrimaryButton text-white rounded-md"
              onClick={() => navigate("/sci/wf1/revisar-inventarios")}
            />
            <ButtonLeftIcon
              name="Visualizar"
              icon={<IoEyeOutline />}
              classname="bg-greenSecondaryButton text-white rounded-md"
              onClick={() => navigate("/sci/wf1/revisar-inventarios")}
            />
            <ButtonCustom
              title="Eliminar Seleccionados"
              className="bg-red-500 text-white rounded-md"
            />
            <ButtonCustom
              title="Modificar"
              className="bg-greenPrimaryButton text-white rounded-md"
              onClick={() => navigate("/sci/wf1/revisar-inventarios")}
            />
          </div>
          <div className="flex ml-auto">
            <ButtonCustom
              title="Usuarios"
              className="bg-greenSecondaryButton text-white rounded-md"
              onClick={() => navigate("/sci/usuarios")}
            />
          </div>
        </div>
        <div className="flex flex-col pt-5 gap-3">
          <div>
            <span className="text-greenSecondaryButton">Roles</span>
          </div>
          <div>
            <PaginatedTable
              columns={tableColumnsSCIRoles}
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
    </div>
  );
};

export default Roles;
