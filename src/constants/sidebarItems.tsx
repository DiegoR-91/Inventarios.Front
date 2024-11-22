import IconAdmin from "@/assets/icons/IconAdmin";
import IconAdminActive from "@/assets/icons/IconAdminActive";
import IconInventory from "@/assets/icons/IconInventory";
import IconInventoryActive from "@/assets/icons/IconInventoryActive";
import IconPrivileges from "@/assets/icons/IconPrivileges";
import IconPrivilegesActive from "@/assets/icons/IconPrivilegesActive";
import IconProcess from "@/assets/icons/IconProcess";
import IconProcessActive from "@/assets/icons/IconProcessActive";
import IconReports from "@/assets/icons/IconReports";
import IconReportsActive from "@/assets/icons/IconReportsActive";
import IconSCI from "@/assets/icons/IconSCI";
import IconSCIActive from "@/assets/icons/IconSCIActive";

export const sidebarItems = [
  {
    title: "Inventarios",
    icon: <IconInventory />,
    iconActive: <IconInventoryActive />,
    path: "/inventarios/inventarios-mermas",
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
    iconActive: <IconAdminActive />,
    path: "/administracion/productos-excluidos",
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
    iconActive: <IconProcessActive />,
    path: "/procesos/conciliacion",
    subMenu: [
      { title: "Conciliación", path: "/procesos/conciliacion" },
      { title: "Procesos Cerrados", path: "/procesos/procesos-cerrados" },
      { title: "Eliminar Procesos", path: "/procesos/eliminar-procesos" },
    ],
  },
  {
    title: "SCI",
    icon: <IconSCI />,
    iconActive: <IconSCIActive />,
    path: "/sci/wf0/revision",
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
    iconActive: <IconReportsActive />,
    path: "/informes/informe-novedades",
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
    iconActive: <IconPrivilegesActive />,
    path: "/privilegios/roles",
    subMenu: [
      { title: "Roles", path: "/privilegios/roles" },
      { title: "Menú", path: "/privilegios/menu" },
      { title: "Usuarios", path: "/privilegios/usuarios" },
    ],
  },
];
