import { IUsuario } from "@/api/interfaces/usuariosInterfaces";
import ButtonCustom from "@/components/Button/ButtonCustom";
import InputCustom from "@/components/Input/InputCustom";
import { ModalBody, ModalFooter } from "@nextui-org/react";

const ModalEditarUsuario = ({
  onHandleEdit,
  onClose,
  isLoading,
  data,
}: {
  onHandleEdit: () => void;
  onClose: () => void;
  isLoading: boolean;
  data: IUsuario;
}) => {
  return (
    <div className="flex flex-col h-full px-8 pt-4 gap-4">
      <ModalBody>
        <div>
          <div className="flex flex-col w-full  gap-6">
            <div className="flex items-center gap-4">
              <p className="text-2xl font-semibold text-black/70">
                Editar Usuario
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="flex flex-col gap-1">
                <span className="text-sm text-black/60 font-semibold">RUT</span>
                <InputCustom
                  type="text"
                  className="h-8 w-56 border rounded-xs text-start pl-2"
                  placeholder="Ingrese el Menú"
                  value={data.rut}
                />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-sm text-black/60 font-semibold">
                  Nombre
                </span>
                <InputCustom
                  type="text"
                  className="h-8 w-56 border rounded-xs text-start pl-2"
                  placeholder="Ingrese el Orden"
                  value={data.nombre}
                />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-sm text-black/60 font-semibold">
                  Username
                </span>
                <InputCustom
                  type="text"
                  className="h-8 w-56 border rounded-xs text-start pl-2"
                  placeholder="Ingrese el Orden"
                  value={data.username}
                />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-sm text-black/60 font-semibold">Rol</span>
                <InputCustom
                  type="text"
                  className="h-8 w-56 border rounded-xs text-start pl-2"
                  placeholder="Ingrese el Orden"
                  value={data.rol}
                />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-sm text-black/60 font-semibold">
                  Activo
                </span>
                <InputCustom
                  type="text"
                  className="h-8 w-56 border rounded-xs text-start pl-2"
                  placeholder="Ingrese el Orden"
                  value={data.activo ? "SI" : "NO"}
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

export default ModalEditarUsuario;
