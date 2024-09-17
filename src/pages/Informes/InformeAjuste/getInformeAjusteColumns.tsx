import { ColumnDef } from "@tanstack/react-table";

const getInformeAjustesColumns = () => {
  const tableColumns: ColumnDef<any>[] = [
    {
      header: "Proceso",
      accessorKey: "process",
      meta: { type: "text" },
    },
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
      header: "Ajuste Original",
      accessorKey: "originalAdjustment",
      meta: { type: "text" },
    },
    {
      header: "Ajuste Modificado",
      accessorKey: "modifiedAdjustment",
      meta: { type: "text" },
    },
    {
      header: "Vol. Modificado",
      accessorKey: "modifiedVolume",
      meta: { type: "text" },
    },
    {
      header: "Estado Ajuste",
      accessorKey: "adjustmentState",
      meta: { type: "text" },
    },
    {
      header: "Fecha Ajuste",
      accessorKey: "adjustmentDate",
      meta: { type: "text" },
    },
    {
      header: "Usuario Estado",
      accessorKey: "userState",
      meta: { type: "text" },
    },
    {
      header: "Cartola",
      accessorKey: "ledger",
      meta: { type: "text" },
    },
    {
      header: "Fecha Cartola",
      accessorKey: "ledgerDate",
      meta: { type: "text" },
    },
    {
      header: "Estado Cartola",
      accessorKey: "ledgerState",
      meta: { type: "text" },
    },
    {
      header: "Fecha Registro",
      accessorKey: "registrationDate",
      meta: { type: "text" },
    },
    {
      header: "Usuario Registro",
      accessorKey: "registrationUser",
      meta: { type: "text" },
    },
  ];
  return tableColumns;
};

export default getInformeAjustesColumns;
