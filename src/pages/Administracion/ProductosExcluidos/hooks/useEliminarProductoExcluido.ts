import instanceApi from "@/services/instanceApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "notistack";

const DEFAULT_ERROR_MESSAGE = "Ocurrió un error al editar el usuario";
export const eliminarProductoExcluido = async (idUser: number) => {
  const response = await instanceApi.delete(`/AdmProductosExc`, {
    data: {
      id: idUser,
    },
  });

  if (!response) throw new Error(DEFAULT_ERROR_MESSAGE);
  return response.data;
};

const useEliminarProductoExcluido = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();
  return useMutation({
    mutationFn: eliminarProductoExcluido,
    onMutate: () => {
      enqueueSnackbar("Eliminando Producto Excluido...", {
        variant: "info",
        style: { backgroundColor: "white", color: "black" },
        anchorOrigin: { vertical: "top", horizontal: "right" },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["productsSelect"] });
      queryClient.invalidateQueries({ queryKey: ["excludedProducts"] });
      enqueueSnackbar("Producto Excluido eliminado", {
        variant: "success",
        style: { backgroundColor: "green", color: "white" },
        anchorOrigin: { vertical: "top", horizontal: "right" },
      });
    },
    onError: (e: Error) => {
      enqueueSnackbar(
        e.message || "Ha ocurrido un error al eliminar el Producto Excluido",
        {
          variant: "error",
          style: { backgroundColor: "white", color: "black" },
          anchorOrigin: { vertical: "top", horizontal: "right" },
        }
      );
    },
  });
};

export default useEliminarProductoExcluido;
