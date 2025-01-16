import { ICrearProductoExcluidoApi } from "@/api/interfaces/Administracion/productosExcluidosInterfaces";
import instanceApi from "@/services/instanceApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "notistack";

const DEFAULT_ERROR_MESSAGE = "Ocurrió un error al crear el usuario";

export const agregarProductoExcluido = async ({
  createExcludedProduct,
}: {
  createExcludedProduct: ICrearProductoExcluidoApi;
}) => {
  const response = await instanceApi.post(`/AdmProductosExc`, {
    ...createExcludedProduct,
  });

  if (!response) throw new Error(DEFAULT_ERROR_MESSAGE);
  return response.data;
};

const useAgregarProductoExcluido = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();
  return useMutation({
    mutationFn: agregarProductoExcluido,
    onMutate: () => {
      enqueueSnackbar("Agregando Producto Excluído...", {
        variant: "info",
        style: { backgroundColor: "white", color: "black" },
        anchorOrigin: { vertical: "top", horizontal: "right" },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["productsSelect"] });
      queryClient.invalidateQueries({ queryKey: ["excludedProducts"] });
      enqueueSnackbar("Producto Excluído Agregado", {
        variant: "success",
        style: { backgroundColor: "green", color: "white" },
        anchorOrigin: { vertical: "top", horizontal: "right" },
      });
    },
    onError: (e: Error) => {
      enqueueSnackbar(
        e.message || "Ha ocurrido un error al agregar el Producto Excluído",
        {
          variant: "error",
          style: { backgroundColor: "white", color: "black" },
          anchorOrigin: { vertical: "top", horizontal: "right" },
        }
      );
    },
  });
};

export default useAgregarProductoExcluido;
