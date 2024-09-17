import { ColumnDef } from "@tanstack/react-table";

const getInformeBalanceCartolasColumns = () => {
  const tableColumns: ColumnDef<any>[] = [
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
      header: "Tipo",
      accessorKey: "type",
      meta: { type: "text" },
    },
    {
      header: "Cartola",
      accessorKey: "cartola",
      meta: { type: "text" },
    },
    {
      header: "Volumen",
      accessorKey: "volume",
      meta: { type: "text" },
    },
    {
      header: "Tarifa",
      accessorKey: "rate",
      meta: { type: "text" },
    },
    {
      header: "Valor",
      accessorKey: "value",
      meta: { type: "text" },
    },
  ];
  return tableColumns;
};

export default getInformeBalanceCartolasColumns;
