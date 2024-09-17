import ButtonCustom from "@/components/Button/ButtonCustom";
import ButtonLeftIcon from "@/components/Button/ButtonLeftIcon";
import SelectCustom from "@/components/Select/SelectCustom";
import { selectMockOptions } from "@/utils/dataMock";
import { RiFileExcel2Line } from "react-icons/ri";

const FiltrosInformeNovedades = () => {
  return (
    <div className="flex w-full gap-5">
      <div className="flex flex-col w-full gap-4">
        <div className="flex w-full justify-between">
          <div className="flex items-center gap-4">
            <label className="text-black/60 font-semibold">Fecha</label>
            <input
              type="date"
              className="w-36 border-2 border-black/30 p-1 rounded-md"
              id="fechaDesde"
            />
            <input
              type="date"
              className="w-36 border-2 border-black/30 p-1 rounded-md"
              id="fechaHasta"
            />
          </div>
          <div className="flex items-center gap-4">
            <input type="checkbox" id="area" className="" />
            <label className="text-black/60 font-semibold">Área</label>
            <SelectCustom
              options={selectMockOptions}
              onSelect={() => {}}
              className="w-36"
            />
          </div>
          <div className="flex items-center gap-4">
            <input type="checkbox" id="CR" className="" />
            <label className="text-black/60 font-semibold">CR</label>
            <SelectCustom
              options={selectMockOptions}
              onSelect={() => {}}
              className="w-36"
            />
          </div>
          <div className="flex items-center gap-4">
            <input type="checkbox" id="sector" className="" />
            <label className="text-black/60 font-semibold">Sector</label>
            <SelectCustom
              options={selectMockOptions}
              onSelect={() => {}}
              className="w-36"
            />
          </div>
          <div className="flex items-center gap-4">
            <input type="checkbox" id="canchas" className="" />
            <label className="text-black/60 font-semibold">Canchas</label>
            <SelectCustom
              options={selectMockOptions}
              onSelect={() => {}}
              className="w-36"
            />
          </div>
        </div>
        <div className="flex w-full justify-between">
          <div className="flex items-center gap-4">
            <input type="checkbox" id="contratista" className="" />
            <label className="text-black/60 font-semibold">Contratista</label>
            <SelectCustom
              options={selectMockOptions}
              onSelect={() => {}}
              className="w-36"
            />
          </div>
          <div className="flex items-center gap-4">
            <input type="checkbox" id="tipoProducto" className="" />
            <label className="text-black/60 font-semibold">Tipo Producto</label>
            <SelectCustom
              options={selectMockOptions}
              onSelect={() => {}}
              className="w-36"
            />
          </div>
          <div className="flex items-center gap-4">
            <input type="checkbox" id="especie" className="" />
            <label className="text-black/60 font-semibold">Especie</label>
            <SelectCustom
              options={selectMockOptions}
              onSelect={() => {}}
              className="w-36"
            />
          </div>
          <div className="flex items-center gap-4">
            <input type="checkbox" id="producto" className="" />
            <label className="text-black/60 font-semibold">Producto</label>
            <SelectCustom
              options={selectMockOptions}
              onSelect={() => {}}
              className="w-36"
            />
          </div>
        </div>
        <div className="flex">
          <div className="flex items-center gap-4">
            <input type="checkbox" id="tipoInventario" className="" />
            <label className="text-black/60 font-semibold">
              Tipo Inventario
            </label>
            <SelectCustom
              options={selectMockOptions}
              onSelect={() => {}}
              className="w-36"
            />
          </div>
          <div className="flex items-center gap-4">
            <input type="checkbox" id="procesos" className="" />
            <label className="text-black/60 font-semibold">Procesos</label>
            <SelectCustom
              options={selectMockOptions}
              onSelect={() => {}}
              className="w-36"
            />
          </div>
          <div className="flex items-center gap-4 ml-auto">
            <ButtonLeftIcon
              name="Descargar Excel"
              icon={<RiFileExcel2Line />}
              classname="text-greenSecondaryButton bg-white border border-greenSecondaryButton rounded-md"
            />
            <ButtonCustom
              title="Consultar"
              className="bg-greenSecondaryButton text-white rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiltrosInformeNovedades;
