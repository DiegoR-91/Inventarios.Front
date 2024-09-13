import { ColumnDef } from "@tanstack/react-table";

const getInformeConciliacionColumns = () => {
  const tableColumns: ColumnDef<any>[] = [
    {
      header: "Cancha",
      accessorKey: "court",
      meta: { type: "text" },
    },
    {
      header: "Fecha",
      accessorKey: "date",
      meta: { type: "text" },
    },
    {
      header: "Tipo Producto",
      accessorKey: "produtType",
      meta: { type: "text" },
    },
    {
      header: "Tipo Inventario",
      accessorKey: "inventoryType",
      meta: { type: "text" },
    },
    {
      header: "Proceso",
      accessorKey: "process",
      meta: { type: "text" },
    },
    {
      header: "Producción Acumulada",
      accessorKey: "accumulatedProduction",
      meta: { type: "text" },
    },
    {
      header: "Saldo Inicial",
      accessorKey: "initialBalance",
      meta: { type: "text" },
    },
  ];
  return tableColumns;
};

export default getInformeConciliacionColumns;
