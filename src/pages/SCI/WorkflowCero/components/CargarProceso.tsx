import ButtonCustom from "@/components/Button/ButtonCustom";
import SelectCustom from "@/components/Select/SelectCustom";
import { selectMockOptions } from "@/utils/dataMock";
import { ModalBody, ModalFooter } from "@nextui-org/react";

const CargarProceso = ({
  onHandleCharge,
  onClose,
  isLoading,
}: {
  onHandleCharge: () => void;
  onClose: () => void;
  isLoading: boolean;
}) => {
  return (
    <div className="flex flex-col h-full px-8 pt-4 gap-4">
      <ModalBody>
        <div>
          <div className="flex flex-col w-full  gap-6">
            <div className="flex items-center gap-4">
              <p className="text-xl font-semibold text-black/70">
                Cargar Proceso
              </p>
            </div>
            <div className="flex w-full pt-4 gap-4">
              <div className="flex flex-col w-[50%]">
                <span className="font-semibold text-lg">Periodo</span>
                <SelectCustom
                  options={selectMockOptions}
                  onSelect={() => {}}
                  className="w-full"
                />
              </div>
              <div className="flex flex-col w-[50%]">
                <span className="font-semibold text-lg">Proceso</span>
                <SelectCustom
                  options={selectMockOptions}
                  onSelect={() => {}}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </ModalBody>
      <ModalFooter>
        <ButtonCustom
          title="Ejecutar"
          onClick={() => {
            onHandleCharge();
            onClose();
          }}
          className="w-44 text-sm font-semibold justify-center bg-greenSecondaryButton text-white rounded-md"
          isDisabled={isLoading}
        />
        <ButtonCustom
          title="Cancelar"
          onClick={onClose}
          className="w-44 text-sm font-semibold justify-center  border-1 border-greenButton text-white bg-red-500 rounded-md"
        />
      </ModalFooter>
    </div>
  );
};

export default CargarProceso;
