import ButtonCustom from "@/components/Button/ButtonCustom";
import SelectCustom from "@/components/Select/SelectCustom";
import { selectMockOptions } from "@/utils/dataMock";

const FiltrosMermas = () => {
  return (
    <div className="flex">
      <div className="flex gap-4">
        <div className="flex items-center gap-4">
          <label className="text-black/60 font-semibold">Cancha</label>
          <SelectCustom
            options={selectMockOptions}
            onSelect={() => {}}
            className="w-36"
          />
        </div>
        <div className="flex items-center gap-4">
          <label className="text-black/60 font-semibold">Geocerca</label>
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
            className="text-black/60 border-2 border-black/30 rounded-md px-2"
          />
        </div>
        <div className="flex items-center gap-4">
          <label className="text-black/60 font-semibold">Hasta</label>
          <input
            type="date"
            className="text-black/60 border-2 border-black/30 rounded-md px-2"
          />
        </div>
        <div className="flex items-center gap-4">
          <label className="text-black/60 font-semibold">Enviados</label>
          <SelectCustom
            options={selectMockOptions}
            onSelect={() => {}}
            className="w-36"
          />
        </div>
      </div>
      <div className="flex ml-auto">
        <ButtonCustom
          title="Filtrar para enviar"
          className="bg-greenSecondaryButton rounded-md w-52 justify-center hover:bg-greenPrimaryButton"
        />
      </div>
    </div>
  );
};

export default FiltrosMermas;
