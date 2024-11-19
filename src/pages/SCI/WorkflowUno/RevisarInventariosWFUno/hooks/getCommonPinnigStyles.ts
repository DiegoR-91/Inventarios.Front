import { CSSProperties } from "react";

export const getCommonPinningStyles = (column: any): CSSProperties => {
  const columnMeta = column?.columnDef?.meta;
  const isPinned = !!columnMeta.sticky;
  const isLastLeftPinnedColumn =
    columnMeta.sticky === "left" && column?.columnDef?.accessorKey === "jaObs";

  return {
    boxShadow: isLastLeftPinnedColumn ? "-4px 0 4px -4px gray inset" : "",

    left: columnMeta.sticky === "left" ? `${column.getStart()}px` : undefined,
    right:
      columnMeta.sticky === "right"
        ? `${column.getAfter("right")}px`
        : undefined,
    opacity: isPinned ? 0.95 : 1,
    position: isPinned ? "sticky" : "relative",
    width: column.getSize(),
    zIndex: isPinned ? 1 : 0,
    backgroundColor: "white",
  };
};
