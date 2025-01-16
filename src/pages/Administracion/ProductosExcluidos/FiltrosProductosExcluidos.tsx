import ButtonCustom from "@/components/Button/ButtonCustom";
import InputCustom from "@/components/Input/InputCustom";
import Loading from "@/components/Loading/Loading";
import SelectCustom from "@/components/Select/SelectCustom";
import useGetProductsSelect from "@/hooks/useGetProductsSelect";
import { useState } from "react";
import useAgregarProductoExcluido from "./hooks/useAgregarProductoExcluido";
import { SelectOptions } from "@/interfaces/commons";
import {
  ICrearProductoExcluidoApi,
  IExcludedProductsFiltersList,
} from "@/api/interfaces/Administracion/productosExcluidosInterfaces";
import SearchInput from "@/components/Input/SearchInput";

const FiltrosProductosExcluidos = ({
  setFilters,
}: {
  setFilters: React.Dispatch<
    React.SetStateAction<IExcludedProductsFiltersList>
  >;
}) => {
  const [selectedProduct, setSelectedProduct] = useState<SelectOptions>({
    value: 0,
    label: "",
  });
  const { data, isLoading } = useGetProductsSelect();
  const { mutateAsync: mutateAgregarProductoExcluido, isPending } =
    useAgregarProductoExcluido();

  const handleCleanAddProduct = () => {
    setSelectedProduct({ value: 0, label: "" });
  };
  const handleSubmitAddExcludedProduct = async () => {
    const dataFormatted: ICrearProductoExcluidoApi = {
      codigo: Number(selectedProduct.value),
      glosa: selectedProduct.label,
      usuariO_ID: 3, // aca va el usuario ID cuando se pueda obtener los datos del usuario
    };
    mutateAgregarProductoExcluido({ createExcludedProduct: dataFormatted });
    handleCleanAddProduct();
  };
  const handleSearchChange = (value: string) => {
    if (value === "") {
      setFilters((prev) => ({
        ...prev,
        paginationFilters: [],
      }));
      return;
    }
    setFilters((prev) => ({
      ...prev,
      paginationFilters: [
        {
          filtrarPor: "glosa",
          textoBusqueda: value,
        },
      ],
    }));
  };

  if (isLoading)
    return (
      <div className="flex justify-center items-center">
        <Loading color="success" size="sm" />;
      </div>
    );
  if (!data) return;

  return (
    <div className="flex gap-5">
      <div className="flex gap-4">
        <div className="flex items-center gap-4">
          <label className="text-black/60 font-semibold">Producto</label>
          <SelectCustom
            options={data}
            fullOptionSelected
            onFullOptionSelect={(value) => setSelectedProduct(value)}
            className="w-48"
          />
        </div>
        <div className="flex items-center gap-4">
          <label className="text-black/60 font-semibold">Código</label>
          <InputCustom
            className="w-20 rounded-sm h-10 bg-white text-black font-bold"
            disabled
            value={Number(selectedProduct.value)}
          />
        </div>
      </div>
      <div className="flex">
        <ButtonCustom
          title="Agregar"
          className="bg-greenSecondaryButton rounded-md w-52 h-10 justify-center hover:bg-greenPrimaryButton"
          onClick={() => handleSubmitAddExcludedProduct()}
          isDisabled={isPending}
        />
      </div>

      <div className="flex ml-auto">
        <SearchInput
          isEmptyField={true}
          className="w-96 h-10 p-[0.30rem] rounded-md border border-black/40"
          onHandleSearch={handleSearchChange}
        />
      </div>
    </div>
  );
};

export default FiltrosProductosExcluidos;
