import ButtonCustom from "@/components/Button/ButtonCustom";
import { ModalBody, ModalFooter } from "@nextui-org/react";

const ModalEliminarProductoExcluido = ({
  idProduct,
  deleteExcludedProduct,
  onClose,
  isLoading,
}: {
  idProduct: number;
  deleteExcludedProduct: (idProduct: number) => Promise<void>;
  onClose: () => void;
  isLoading: boolean;
}) => {
  return (
    <div className="flex flex-col h-full px-8 pt-4 gap-4">
      <ModalBody>
        <div>
          <div className="flex flex-col w-full  gap-6">
            <div className="flex items-center gap-4">
              <p className="text-2xl font-semibold text-black/70">
                Eliminar Producto Excluido
              </p>
            </div>
            <div className="flex pt-4">
              <span className="font-semibold text-lg">
                ¿Estás seguro que deseas eliminar el Producto Excluido?
              </span>
            </div>
          </div>
        </div>
      </ModalBody>
      <ModalFooter>
        <ButtonCustom
          title="Cancelar"
          onClick={onClose}
          className="w-44 text-sm font-semibold justify-center  border-1 border-greenButton text-black/60 rounded-sm"
        />

        <ButtonCustom
          title="Eliminar"
          onClick={() => {
            deleteExcludedProduct(idProduct);
            onClose();
          }}
          className="w-44 text-sm font-semibold justify-center bg-greenSecondaryButton text-white rounded-sm"
          isDisabled={isLoading}
        />
      </ModalFooter>
    </div>
  );
};

export default ModalEliminarProductoExcluido;
