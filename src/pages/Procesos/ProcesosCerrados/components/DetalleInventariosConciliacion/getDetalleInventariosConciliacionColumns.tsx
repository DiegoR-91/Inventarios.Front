import { ColumnDef } from "@tanstack/react-table";

const getDetalleInventariosConciliacionColumns = () => {
  const tableColumns: ColumnDef<any>[] = [
    {
      header: "Nro inventario",
      accessorKey: "inventoryNumber",
      meta: { type: "text" },
    },
    {
      header: "Cuadrilla",
      accessorKey: "group",
      meta: { type: "text" },
    },
    {
      header: "Contratista",
      accessorKey: "contractor",
      meta: { type: "text" },
    },
    {
      header: "Faena",
      accessorKey: "labor",
      meta: { type: "text" },
    },
    {
      header: "Faena",
      accessorKey: "labor",
      meta: { type: "text" },
    },
    {
      header: "EE-PP",
      accessorKey: "EEPP",
      meta: { type: "text" },
    },
    {
      header: "Vol.MR",
      accessorKey: "volMR",
      meta: { type: "text" },
    },
    {
      header: "Vol.M3",
      accessorKey: "volM3",
      meta: { type: "text" },
    },
    {
      header: "Observación",
      accessorKey: "observation",
      meta: { type: "text" },
    },
  ];
  return tableColumns;
};

export default getDetalleInventariosConciliacionColumns;
