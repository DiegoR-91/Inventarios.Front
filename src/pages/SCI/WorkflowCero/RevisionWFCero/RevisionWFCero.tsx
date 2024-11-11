import PaginatedTable from "@/components/Table/PaginatedTable";
import { useState } from "react";
import { PaginationState, SortingState } from "@tanstack/react-table";
import Loading from "@/components/Loading/Loading";
import { TfiExport } from "react-icons/tfi";
import ButtonLeftIcon from "@/components/Button/ButtonLeftIcon";
import { useNavigate } from "react-router-dom";
import { Modal, ModalContent, useDisclosure } from "@nextui-org/react";

import { IoClose } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import getVerInventariosWFUnoColumns from "../../WorkflowUno/VerInventariosWFUno/getVerInventariosWFUnoColumns";
import useGetVerInventariosWFUno from "../../WorkflowUno/VerInventariosWFUno/hooks/useGetVerInventariosWFUno";
import CargarProceso from "../components/CargarProceso";

const tableColumnsVerInventariosWFUno = getVerInventariosWFUnoColumns();

const RevisionWFCero = () => {
  const navigate = useNavigate();
  const { isOpen: isOpenModal, onOpen, onClose } = useDisclosure();
  const [sorting, setSorting] = useState<SortingState>([]);
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 1,
    pageSize: 10,
  });
  const [rowSize, setRowSize] = useState<number>(10);
  const { data, isLoading } = useGetVerInventariosWFUno(
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
            name="Editar"
            icon={<MdEdit />}
            classname="bg-greenSecondaryButton text-white rounded-md"
            onClick={() => navigate("/sci/wf0/detalle-revision")}
          />
          <ButtonLeftIcon
            name="Cargar Proceso"
            icon={<TfiExport />}
            classname="bg-greenSecondaryButton text-white rounded-md"
            onClick={onOpen}
          />
        </div>
        <div className="pt-5">
          <PaginatedTable
            columns={tableColumnsVerInventariosWFUno}
            data={data}
            sorting={sorting}
            setSorting={setSorting}
            pagination={pagination}
            setPagination={setPagination}
            rowSize={rowSize}
            setRowSize={setRowSize}
          />
        </div>
        <Modal
          classNames={{
            backdrop: "bg-grayDisabled/50",
            base: "rounded-md",
          }}
          isOpen={isOpenModal}
          onClose={onClose}
          size="4xl"
          closeButton={<IoClose size={45} />}
        >
          <ModalContent className="h-[20rem]">
            <CargarProceso
              isLoading={isLoading}
              onClose={onClose}
              onHandleCharge={() => {}}
            />
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
};

export default RevisionWFCero;
