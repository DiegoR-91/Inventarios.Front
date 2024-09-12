import ButtonCustom from "@/components/Button/ButtonCustom";
import SelectCustom from "@/components/Select/SelectCustom";
import { selectMockOptions } from "@/utils/dataMock";

const FiltrosConciliacion = () => {
  return (
    <div className="flex flex-wrap text-small">
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <div className="flex items-center gap-4">
            <label className="text-black/60 font-semibold">Proceso</label>
            <SelectCustom
              options={selectMockOptions}
              onSelect={() => {}}
              className="w-36"
            />
          </div>

          <div className="flex items-center gap-4">
            <label className="text-black/60 font-semibold">Desde</label>
            <input
              type="date"
              className="text-black/60 border-2 border-black/30 rounded-md px-2 py-1"
            />
          </div>
          <div className="flex items-center gap-4">
            <label className="text-black/60 font-semibold">Hasta</label>
            <input
              type="date"
              className="text-black/60 border-2 border-black/30 rounded-md px-2 py-1"
            />
          </div>
          <div className="flex items-center gap-4">
            <label className="text-black/60 font-semibold">Obs.</label>
            <textarea className="w-96 text-black/60 border-2 border-black/30 rounded-md px-2" />
          </div>
        </div>
        <div className="flex w-full gap-4">
          <div className="flex items-center gap-4">
            <label className="text-black/60 font-semibold">
              Productos Excluidos
            </label>
            <SelectCustom
              options={selectMockOptions}
              onSelect={() => {}}
              className="w-36"
            />
          </div>

          <div className="flex items-center gap-4">
            <label className="text-black/60 font-semibold">Validaciones</label>
            <SelectCustom
              options={selectMockOptions}
              onSelect={() => {}}
              className="w-36"
            />
          </div>
          <div className="flex ml-auto">
            <ButtonCustom
              title="Nuevo"
              className="bg-greenSecondaryButton rounded-md w-52 justify-center hover:bg-greenPrimaryButton"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiltrosConciliacion;
