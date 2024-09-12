import { IoClose } from "react-icons/io5";
import { Modal, ModalContent, useDisclosure } from "@nextui-org/react";
import { RiDeleteBin6Line } from "react-icons/ri";
import ModalEliminarProductoExcluido from "./ModalEliminarProductoExcluido";

const ActionsProductosExcuidosInput = ({ /* row, */ column }: any) => {
  const { isOpen: isOpenModal, onOpen, onClose } = useDisclosure();
  const columnData = column?.columnDef?.meta;
  //const rowData = row?.original;

  return (
    <div className="edit-cell-container">
      <div className="flex justify-start items-center pl-4">
        {columnData.isAdmin ? (
          <button className="flex gap-2 bg-transparent rounded-md hover:cursor-pointer">
            <RiDeleteBin6Line
              onClick={() => {
                onOpen();
              }}
              className="text-red-400"
            />
          </button>
        ) : (
          <p>Solo Lectura</p>
        )}
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
          <ModalEliminarProductoExcluido
            onHandleDisabled={() => {}}
            onClose={onClose}
            isLoading={false}
          />
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ActionsProductosExcuidosInput;
