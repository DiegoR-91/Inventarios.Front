import ButtonCustom from "@/components/Button/ButtonCustom";
import ButtonLeftIcon from "@/components/Button/ButtonLeftIcon";
import SelectCustom from "@/components/Select/SelectCustom";
import { selectMockOptions } from "@/utils/dataMock";
import { RiFileExcel2Line } from "react-icons/ri";

const FiltrosInformeNovedades = () => {
  return (
    <div className="flex w-full gap-5">
      <div className="flex w-full gap-4">
        <div className="flex items-center gap-4">
          <label className="text-black/60 font-semibold">Periodo</label>
          <SelectCustom
            options={selectMockOptions}
            onSelect={() => {}}
            className="w-36"
          />
        </div>
        <div className="flex items-center gap-4">
          <label className="text-black/60 font-semibold">Proceso</label>
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
  );
};

export default FiltrosInformeNovedades;
