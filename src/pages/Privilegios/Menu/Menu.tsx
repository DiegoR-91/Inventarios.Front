import ButtonLeftIcon from "@/components/Button/ButtonLeftIcon";
import Loading from "@/components/Loading/Loading";
import PaginatedTable from "@/components/Table/PaginatedTable";
import { PaginationState, SortingState } from "@tanstack/react-table";
import { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import getMenuColumns from "./getMenuColumns";
import useGetMenu from "./hooks/useGetMenu";
import { Modal, ModalContent, useDisclosure } from "@nextui-org/react";
import { IoClose } from "react-icons/io5";
import ModalAgregarMenu from "./components/ModalAgregarMenu";
import useGetSubMenu from "./SubMenu/hooks/useGetSubMenu";
import getSubMenuColumns from "./SubMenu/getSubMenuColumns";

const tableMenuColumns = getMenuColumns();
const tableSubMenuColumns = getSubMenuColumns();

const Menu = () => {
  const { isOpen: isOpenModal, onOpen, onClose } = useDisclosure();
  const [sorting, setSorting] = useState<SortingState>([]);
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 1,
    pageSize: 10,
  });
  const [rowSize, setRowSize] = useState<number>(10);

  const { data: menuData, isLoading: isLoadingMenu } = useGetMenu(
    sorting,
    pagination,
    rowSize
  );
  const { data: subMenuData } = useGetSubMenu(sorting, pagination, rowSize);

  if (isLoadingMenu)
    return (
      <div className="flex justify-center items-center">
        <Loading color="success" size="sm" />;
      </div>
    );
  if (!menuData) return;

  return (
    <div className="flex w-full h-full pt-5">
      <div className="flex flex-col w-full h-full">
        <div>
          <ButtonLeftIcon
            name="Agregar Rol"
            icon={<IoIosAdd />}
            classname="bg-greenPrimaryButton text-white rounded-md"
            onClick={onOpen}
          />
        </div>
        <div className="pt-5">
          <PaginatedTable
            columns={tableMenuColumns}
            data={menuData}
            sorting={sorting}
            setSorting={setSorting}
            pagination={pagination}
            setPagination={setPagination}
            rowSize={rowSize}
            setRowSize={setRowSize}
          />
          <PaginatedTable
            columns={tableSubMenuColumns}
            data={subMenuData}
            sorting={sorting}
            setSorting={setSorting}
            pagination={pagination}
            setPagination={setPagination}
            rowSize={rowSize}
            setRowSize={setRowSize}
          />
        </div>
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
          <ModalAgregarMenu
            onHandleAdd={() => {}}
            onClose={onClose}
            isLoading={false}
          />
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Menu;
