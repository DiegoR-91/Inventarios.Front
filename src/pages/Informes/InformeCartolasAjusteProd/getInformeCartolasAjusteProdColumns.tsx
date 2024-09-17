import { ColumnDef } from "@tanstack/react-table";

const getInformeCartolasAjusteProdColumns = () => {
  const tableColumns: ColumnDef<any>[] = [
    {
      header: "Contratista",
      accessorKey: "contractor",
      meta: { type: "text" },
    },
    {
      header: "Cod. Contratista",
      accessorKey: "contractorCode",
      meta: { type: "text" },
    },
    {
      header: "RUT",
      accessorKey: "rut",
      meta: { type: "text" },
    },
    {
      header: "RUT DV",
      accessorKey: "rutDV",
      meta: { type: "text" },
    },
    {
      header: "Cancha",
      accessorKey: "court",
      meta: { type: "text" },
    },
    {
      header: "Cod. Cancha",
      accessorKey: "courtCode",
      meta: { type: "text" },
    },
    {
      header: "Especie",
      accessorKey: "specie",
      meta: { type: "text" },
    },
    {
      header: "Producto",
      accessorKey: "product",
      meta: { type: "text" },
    },
    {
      header: "Equipo",
      accessorKey: "team",
      meta: { type: "text" },
    },
    {
      header: "Línea",
      accessorKey: "line",
      meta: { type: "text" },
    },
    {
      header: "Volumen Ajuste",
      accessorKey: "adjustmentVolume",
      meta: { type: "text" },
    },
    {
      header: "Volumen Producción",
      accessorKey: "productionVolume",
      meta: { type: "text" },
    },
    {
      header: "Volumen Total",
      accessorKey: "totalVolume",
      meta: { type: "text" },
    },
  ];
  return tableColumns;
};

export default getInformeCartolasAjusteProdColumns;
