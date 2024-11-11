import IconAdmin from "@/assets/icons/IconAdmin";
import IconInventory from "@/assets/icons/IconInventory";
import IconPrivileges from "@/assets/icons/IconPrivileges";
import IconProcess from "@/assets/icons/IconProcess";
import IconReports from "@/assets/icons/IconReports";
import IconSCI from "@/assets/icons/IconSCI";

export const sidebarItems = [
  {
    title: "Inventarios",
    icon: <IconInventory />,
    subMenu: [
      {
        title: "Inventarios de Mermas",
        path: "/inventarios/inventarios-mermas",
      },
      {
        title: "Mantención de Cartolas",
        path: "/inventarios/mantencion-cartolas",
      },
    ],
  },
  {
    title: "Administración",
    icon: <IconAdmin />,
    subMenu: [
      {
        title: "Productos Excluidos",
        path: "/administracion/productos-excluidos",
      },
      { title: "Novedades", path: "/administracion/novedades" },
    ],
  },
  {
    title: "Procesos",
    icon: <IconProcess />,
    subMenu: [
      { title: "Conciliación", path: "/procesos/conciliacion" },
      { title: "Procesos Cerrados", path: "/procesos/procesos-cerrados" },
      { title: "Eliminar Procesos", path: "/procesos/eliminar-procesos" },
    ],
  },
  {
    title: "SCI",
    icon: <IconSCI />,
    subMenu: [
      { title: "Revisión (WF 0)", path: "/sci/wf0/revision" },
      { title: "Jefe de Area (WF 1)", path: "/sci/wf1/ver-inventarios" },
      { title: "Subgerente (WF 2)", path: "/sci/wf2/ver-inventarios" },
      { title: "Informe de Inventarios", path: "/sci/informe-inventarios" },
      { title: "Roles y Usuarios", path: "/sci/roles" },
    ],
  },
  {
    title: "Informes",
    icon: <IconReports />,
    subMenu: [
      { title: "Informe Novedades", path: "/informes/informe-novedades" },
      { title: "Informe Conciliación", path: "/informes/informe-conciliacion" },
      { title: "Informe de Ajuste", path: "/informes/informe-ajuste" },
      {
        title: "Ic. Ajustes - Producción",
        path: "/informes/informe-ajuste-produccion",
      },
      {
        title: "Informe Balance Cartolas",
        path: "/informes/informe-balance-cartolas",
      },
    ],
  },
  {
    title: "Privilegios",
    icon: <IconPrivileges />,
    subMenu: [
      { title: "Roles", path: "/privilegios/roles" },
      { title: "Menú", path: "/privilegios/menu" },
      { title: "Usuarios", path: "/privilegios/usuarios" },
    ],
  },
];
