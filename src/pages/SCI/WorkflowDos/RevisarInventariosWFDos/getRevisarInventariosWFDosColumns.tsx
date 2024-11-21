import IndeterminateCheckbox from "@/components/Input/IndeterminateCheckbox";
import InputCheckTable from "@/components/Input/InputCheckTable";
import { ColumnDef } from "@tanstack/react-table";

const getRevisarInventariosWFDosColumns = () => {
  const tableColumns: ColumnDef<any>[] = [
    {
      id: "select",
      /*   header: ({ table }) => (
        <div className="flex w-full px-1">
          <IndeterminateCheckbox
            {...{
              checked: table.getIsAllRowsSelected(),
              indeterminate: table.getIsSomeRowsSelected(),
              onChange: table.getToggleAllRowsSelectedHandler(),
            }}
          />
        </div>
      ), */
      cell: ({ row }) => (
        <div className="px-1">
          <IndeterminateCheckbox
            {...{
              checked: row.getIsSelected(),
              disabled: !row.getCanSelect(),
              indeterminate: row.getIsSomeSelected(),
              onChange: row.getToggleSelectedHandler(),
            }}
          />
        </div>
      ),
      meta: { sticky: "left" },
      size: 60,
      minSize: 60,
      maxSize: 60,
    },
    {
      header: "Inv.",
      accessorKey: "inv",
      meta: { type: "text", sticky: "left" },
      size: 60,
      minSize: 60,
      maxSize: 60,
      cell: InputCheckTable,
    },
    {
      header: "SG AP",
      accessorKey: "sgap",
      meta: { type: "text", sticky: "left" },
      size: 90,
      minSize: 90,
      maxSize: 90,
      cell: InputCheckTable,
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
      header: "Contratista",
      accessorKey: "contractor",
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
      header: "Tipo Inv.",
      accessorKey: "inventoryType",
      meta: { type: "text" },
    },
    {
      header: "Prod. Acum.",
      accessorKey: "prodAcum",
      meta: { type: "text" },
    },
    {
      header: "Saldo Inicial",
      accessorKey: "initialBalance",
      meta: { type: "text" },
    },
    {
      header: "Saldo Final",
      accessorKey: "finalBalance",
      meta: { type: "text" },
    },
    {
      header: "M3 Inv.",
      accessorKey: "inventoryM3",
      meta: { type: "text" },
    },
    {
      header: "Dif.",
      accessorKey: "dif",
      meta: { type: "text" },
    },
    {
      header: "Dif. Ajust",
      accessorKey: "diffAdjust",
      meta: { type: "text" },
    },
    {
      header: "Inv. Inf.",
      accessorKey: "inventoryInf",
      meta: { type: "text" },
    },
    {
      header: "Ja. curso acción",
      accessorKey: "jaActionCourse",
      meta: { type: "text" },
    },
    {
      header: "Ja. Observación",
      accessorKey: "jaObservation",
      meta: { type: "text" },
    },
    {
      header: "Ja. ap",
      accessorKey: "jaAp",
      meta: { type: "text" },
      size: 60,
      minSize: 60,
      maxSize: 60,
      cell: InputCheckTable,
    },
    {
      header: "Ja. re",
      accessorKey: "jaRe",
      meta: { type: "text" },
      size: 60,
      minSize: 60,
      maxSize: 60,
      cell: InputCheckTable,
    },
    {
      header: "Sg. ap",
      accessorKey: "sgAp",
      meta: { type: "text" },
      size: 60,
      minSize: 60,
      maxSize: 60,
      cell: InputCheckTable,
    },
    {
      header: "Sg. re",
      accessorKey: "sgRe",
      meta: { type: "text" },
      size: 60,
      minSize: 60,
      maxSize: 60,
      cell: InputCheckTable,
    },
  ];
  return tableColumns;
};

export default getRevisarInventariosWFDosColumns;
