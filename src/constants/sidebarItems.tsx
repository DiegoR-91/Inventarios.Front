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
        path: "/inventarios-mermas",
      },
      {
        title: "Mantención de Cartolas",
        path: "/mantencion-cartolas",
      },
    ],
  },
  {
    title: "Administración",
    icon: <IconAdmin />,
    subMenu: [
      { title: "Productos Excluidos", path: "/productos-excluidos" },
      { title: "Novedades", path: "/novedades" },
    ],
  },
  {
    title: "Procesos",
    icon: <IconProcess />,
    subMenu: [
      { title: "Conciliación", path: "/conciliacion" },
      { title: "Procesos Cerrados", path: "/procesos-cerrados" },
      { title: "Eliminar Procesos", path: "/eliminar-procesos" },
    ],
  },
  {
    title: "SCI",
    icon: <IconSCI />,
    subMenu: [
      { title: "Ver Inventarios", path: "/ver-inventarios" },
      { title: "Revisar Inventarios", path: "/revisar-inventarios" },
      { title: "Informe de Inventarios", path: "/informe-inventarios" },
    ],
  },
  {
    title: "Informes",
    icon: <IconReports />,
    subMenu: [
      { title: "Informe Novedades", path: "/informe-novedades" },
      { title: "Informe Conciliación", path: "/informe-conciliacion" },
      { title: "Informe de Ajuste", path: "/informe-ajuste" },
      {
        title: "Ic. Ajustes - Producción",
        path: "/informe-ic-ajuste-produccion",
      },
      { title: "Informe Balance Cartolas", path: "/informe-balance-cartlas" },
    ],
  },
  {
    title: "Privilegios",
    icon: <IconPrivileges />,
    subMenu: [
      { title: "Roles", path: "/roles" },
      { title: "Menú", path: "/menu" },
      { title: "Usuarios", path: "/usuarios" },
    ],
  },
];
