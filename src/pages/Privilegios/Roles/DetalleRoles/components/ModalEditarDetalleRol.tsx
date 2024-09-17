import { IDetalleRol } from "@/api/interfaces/rolesInterfaces";
import ButtonCustom from "@/components/Button/ButtonCustom";
import InputCustom from "@/components/Input/InputCustom";
import { ModalBody, ModalFooter } from "@nextui-org/react";

const ModalEditarDetalleRol = ({
  onHandleEdit,
  onClose,
  isLoading,
  data,
}: {
  onHandleEdit: () => void;
  onClose: () => void;
  isLoading: boolean;
  data: IDetalleRol;
}) => {
  return (
    <div className="flex flex-col h-full px-8 pt-4 gap-4">
      <ModalBody>
        <div>
          <div className="flex flex-col w-full  gap-6">
            <div className="flex items-center gap-4">
              <p className="text-2xl font-semibold text-black/70">
                Editar Detalle Rol
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="flex flex-col gap-1">
                <span className="text-sm text-black/60 font-semibold">
                  Cód. Menú
                </span>
                <InputCustom
                  type="text"
                  className="h-8 w-56 border rounded-xs text-start pl-2"
                  placeholder="Ingrese el código"
                  value={data.codeMenu}
                />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-sm text-black/60 font-semibold">
                  Menú
                </span>
                <InputCustom
                  type="text"
                  className="h-8 w-56 border rounded-xs text-start pl-2"
                  placeholder="Ingrese el rol"
                  value={data.menu}
                />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-sm text-black/60 font-semibold">
                  Cod. SubMenú
                </span>
                <InputCustom
                  type="text"
                  className="h-8 w-56 border rounded-xs text-start pl-2"
                  placeholder="Ingrese el rol"
                  value={data.codeSubmenu}
                />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-sm text-black/60 font-semibold">
                  SubMenú
                </span>
                <InputCustom
                  type="text"
                  className="h-8 w-56 border rounded-xs text-start pl-2"
                  placeholder="Ingrese el rol"
                  value={data.submenu}
                />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-sm text-black/60 font-semibold">
                  Actualiza
                </span>
                <InputCustom
                  type="text"
                  className="h-8 w-56 border rounded-xs text-start pl-2"
                  placeholder="Ingrese el rol"
                  value={data.update}
                />
              </div>
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
          title="Editar"
          onClick={() => {
            onHandleEdit();
            onClose();
          }}
          className="w-44 text-sm font-semibold justify-center bg-greenSecondaryButton text-white rounded-sm"
        />
      </ModalFooter>
    </div>
  );
};

export default ModalEditarDetalleRol;