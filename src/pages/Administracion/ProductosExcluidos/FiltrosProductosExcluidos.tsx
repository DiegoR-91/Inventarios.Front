import ButtonCustom from "@/components/Button/ButtonCustom";
import SelectCustom from "@/components/Select/SelectCustom";
import { selectMockOptions } from "@/utils/dataMock";
import { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const FiltrosProductosExcluidos = () => {
  const [isOpenAddProduct, setIsOpenAddProduct] = useState(false);
  return (
    <div className="flex gap-5">
      <div className="flex">
        <ButtonCustom
          title="Agregar"
          className="bg-greenSecondaryButton rounded-md w-52 justify-center hover:bg-greenPrimaryButton"
          onClick={() => setIsOpenAddProduct(true)}
        />
      </div>
      {isOpenAddProduct && (
        <div className="flex gap-4">
          <div className="flex items-center gap-4">
            <label className="text-black/60 font-semibold">Producto</label>
            <SelectCustom
              options={selectMockOptions}
              onSelect={() => {}}
              className="w-36"
            />
          </div>
          <div className="flex items-center gap-4">
            <label className="text-black/60 font-semibold">Tipo</label>
            <SelectCustom
              options={selectMockOptions}
              onSelect={() => {}}
              className="w-36"
            />
          </div>
          <div className="flex items-center gap-4">
            <button className="flex w-9 h-full justify-center items-center text-white  bg-greenSecondaryButton rounded-md hover:cursor-pointer">
              <FaCheck size={20} />
            </button>
            <button className="flex w-9 h-full justify-center items-center text-white bg-red-500 rounded-md hover:cursor-pointer">
              <IoClose size={27} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FiltrosProductosExcluidos;
