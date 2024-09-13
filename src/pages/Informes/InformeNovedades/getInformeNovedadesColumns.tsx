import { ColumnDef } from "@tanstack/react-table";

const getInformeNovedadesColumns = () => {
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
      header: "Tipo",
      accessorKey: "type",
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
      header: "Guias",
      accessorKey: "guide",
      meta: { type: "text" },
    },
    {
      header: "Novedad",
      accessorKey: "novelty",
      meta: { type: "text" },
    },
  ];
  return tableColumns;
};

export default getInformeNovedadesColumns;
