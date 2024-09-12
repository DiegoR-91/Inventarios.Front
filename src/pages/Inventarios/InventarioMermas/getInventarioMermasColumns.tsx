import { ColumnDef } from "@tanstack/react-table";

const getInventarioMermasColumns = () => {
  const tableColumns: ColumnDef<any>[] = [
    {
      header: "Cancha",
      accessorKey: "court",
      meta: { type: "text" },
    },
    {
      header: "Geocerca",
      accessorKey: "geo",
      meta: { type: "text" },
    },
    {
      header: "Fecha de inventario",
      accessorKey: "inventoryDate",
      meta: { type: "text" },
    },
    {
      header: "Enviados",
      accessorKey: "send",
      meta: { type: "text" },
    },
    {
      header: "Inventario Bodega",
      accessorKey: "inventoryStore",
      meta: { type: "text" },
    },
    {
      header: "Fecha Hora de Envío",
      accessorKey: "sendDateTime",
      meta: { type: "text" },
    },
    {
      header: "Total vol m3",
      accessorKey: "m3VolTotal",
      meta: { type: "text" },
    },
  ];
  return tableColumns;
};

export default getInventarioMermasColumns;
