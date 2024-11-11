//import LayoutFull from"@/Layouts/LayoutFull";
import LayoutFull from "@/Layouts/LayoutFull";
import LayoutLogin from "@/Layouts/LayoutLogin";
import ModulesContainer from "@/Layouts/ModulesContainer";
import Loading from "@/components/Loading/Loading";
import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const LoginPage = lazy(() => import("@/pages/Login/Login"));
const HomePage = lazy(() => import("@/pages/Home/Home"));
const InventarioMermasPage = lazy(
  () => import("@/pages/Inventarios/InventarioMermas/InventarioMermas")
);
const MantencionCartolasPage = lazy(
  () => import("@/pages/Inventarios/MantencionCartolas/MantencionCartolas")
);
const ProductosExcluidosPage = lazy(
  () => import("@/pages/Administracion/ProductosExcluidos/ProductosExcluidos")
);
const NovedadesPage = lazy(
  () => import("@/pages/Administracion/Novedades/Novedades")
);
const ConciliacionPage = lazy(
  () => import("@/pages/Procesos/Conciliacion/Conciliacion")
);
const ProcesosCerradosPage = lazy(
  () => import("@/pages/Procesos/ProcesosCerrados/ProcesosCerrados")
);
const EliminarProcesosPage = lazy(
  () => import("@/pages/Procesos/EliminarProcesos/EliminarProcesos")
);
const RevisionWFCeroPage = lazy(
  () => import("@/pages/SCI/WorkflowCero/RevisionWFCero/RevisionWFCero")
);
const DetalleRevisionWFCeroPage = lazy(
  () =>
    import(
      "@/pages/SCI/WorkflowCero/DetallesRevisionWFCero/DetallesRevisionWFCero"
    )
);
const VerInventariosWFUnoPage = lazy(
  () =>
    import("@/pages/SCI/WorkflowUno/VerInventariosWFUno/VerInventariosWFUno")
);
const RevisarInventariosWFUnoPage = lazy(
  () =>
    import(
      "@/pages/SCI/WorkflowUno/RevisarInventariosWFUno/RevisarInventariosWFUno"
    )
);
const VerInventariosWFDosPage = lazy(
  () =>
    import("@/pages/SCI/WorkflowDos/VerInventariosWFDos/VerInventariosWFDos")
);
const RevisarInventariosWFDosPage = lazy(
  () =>
    import(
      "@/pages/SCI/WorkflowDos/RevisarInventariosWFDos/RevisarInventariosWFDos"
    )
);
const SCIRolesPage = lazy(
  () => import("@/pages/SCI/RolesUsuarios/Roles/Roles")
);
const InformeInventariosPage = lazy(
  () => import("@/pages/SCI/InformeInventarios/InformeInventarios")
);
const SCIUsuariosPage = lazy(
  () => import("@/pages/SCI/RolesUsuarios/Usuarios/Usuarios")
);
const InformeNovedadesPage = lazy(
  () => import("@/pages/Informes/InformeNovedades/InformeNovedades")
);
const InformeConciliacionPage = lazy(
  () => import("@/pages/Informes/InformeConciliacion/InformeConciliacion")
);
const InformeAjustePage = lazy(
  () => import("@/pages/Informes/InformeAjuste/InformeAjuste")
);
const InformeAjusteProduccionPage = lazy(
  () =>
    import(
      "@/pages/Informes/InformeCartolasAjusteProd/InformeCartolasAjusteProd"
    )
);
const InformeBalanceCartolasPage = lazy(
  () => import("@/pages/Informes/InformeBalanceCartolas/InformeBalanceCartolas")
);
const RolesPage = lazy(() => import("@/pages/Privilegios/Roles/Roles"));
const MenuPage = lazy(() => import("@/pages/Privilegios/Menu/Menu"));
const UsuariosPage = lazy(
  () => import("@/pages/Privilegios/Usuarios/Usuarios")
);

const Router = () => {
  return (
    <BrowserRouter basename="">
      <main className="min-h-screen flex w-full">
        <Suspense fallback={<Loading size="md" color="success" />}>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route
              path="/login"
              index
              element={<LayoutLogin children={<LoginPage />} />}
            />
            <Route
              path="/home"
              index
              element={<LayoutFull children={<HomePage />} />}
            />
            {/* MODULO INVENTARIOS */}
            <Route
              path="inventarios/inventarios-mermas"
              index
              element={
                <LayoutFull
                  children={
                    <ModulesContainer children={<InventarioMermasPage />} />
                  }
                />
              }
            />
            <Route
              path="inventarios/mantencion-cartolas"
              index
              element={
                <LayoutFull
                  children={
                    <ModulesContainer children={<MantencionCartolasPage />} />
                  }
                />
              }
            />
            {/* MODULO ADMINISTRACION */}
            <Route
              path="administracion/productos-excluidos"
              index
              element={
                <LayoutFull
                  children={
                    <ModulesContainer children={<ProductosExcluidosPage />} />
                  }
                />
              }
            />
            <Route
              path="administracion/novedades"
              index
              element={
                <LayoutFull
                  children={<ModulesContainer children={<NovedadesPage />} />}
                />
              }
            />
            {/* MODULO PROCESOS */}
            <Route
              path="procesos/conciliacion"
              index
              element={
                <LayoutFull
                  children={
                    <ModulesContainer children={<ConciliacionPage />} />
                  }
                />
              }
            />
            <Route
              path="procesos/procesos-cerrados"
              index
              element={
                <LayoutFull
                  children={
                    <ModulesContainer children={<ProcesosCerradosPage />} />
                  }
                />
              }
            />
            <Route
              path="procesos/eliminar-procesos"
              index
              element={
                <LayoutFull
                  children={
                    <ModulesContainer children={<EliminarProcesosPage />} />
                  }
                />
              }
            />
            {/* MODULO SCI */}
            {/* WF0 */}
            <Route
              path="sci/wf0/revision"
              index
              element={
                <LayoutFull
                  children={
                    <ModulesContainer children={<RevisionWFCeroPage />} />
                  }
                />
              }
            />
            <Route
              path="sci/wf0/detalle-revision"
              index
              element={
                <LayoutFull
                  children={
                    <ModulesContainer
                      children={<DetalleRevisionWFCeroPage />}
                    />
                  }
                />
              }
            />
            {/* WF1 */}
            <Route
              path="sci/wf1/ver-inventarios"
              index
              element={
                <LayoutFull
                  children={
                    <ModulesContainer children={<VerInventariosWFUnoPage />} />
                  }
                />
              }
            />
            <Route
              path="sci/wf1/revisar-inventarios"
              index
              element={
                <LayoutFull
                  children={
                    <ModulesContainer
                      children={<RevisarInventariosWFUnoPage />}
                    />
                  }
                />
              }
            />
            {/* WF2 */}
            <Route
              path="sci/wf2/ver-inventarios"
              index
              element={
                <LayoutFull
                  children={
                    <ModulesContainer children={<VerInventariosWFDosPage />} />
                  }
                />
              }
            />
            <Route
              path="sci/wf2/revisar-inventarios"
              index
              element={
                <LayoutFull
                  children={
                    <ModulesContainer
                      children={<RevisarInventariosWFDosPage />}
                    />
                  }
                />
              }
            />
            {/* Informe */}
            <Route
              path="sci/informe-inventarios"
              index
              element={
                <LayoutFull
                  children={
                    <ModulesContainer children={<InformeInventariosPage />} />
                  }
                />
              }
            />
            {/* Roles y usuarios */}
            <Route
              path="sci/roles"
              index
              element={
                <LayoutFull
                  children={<ModulesContainer children={<SCIRolesPage />} />}
                />
              }
            />
            <Route
              path="sci/usuarios"
              index
              element={
                <LayoutFull
                  children={<ModulesContainer children={<SCIUsuariosPage />} />}
                />
              }
            />
            {/* MODULO INFORMES */}
            <Route
              path="/informes/informe-novedades"
              index
              element={
                <LayoutFull
                  children={
                    <ModulesContainer children={<InformeNovedadesPage />} />
                  }
                />
              }
            />
            <Route
              path="/informes/informe-conciliacion"
              index
              element={
                <LayoutFull
                  children={
                    <ModulesContainer children={<InformeConciliacionPage />} />
                  }
                />
              }
            />
            <Route
              path="/informes/informe-ajuste"
              index
              element={
                <LayoutFull
                  children={
                    <ModulesContainer children={<InformeAjustePage />} />
                  }
                />
              }
            />
            <Route
              path="/informes/informe-ajuste-produccion"
              index
              element={
                <LayoutFull
                  children={
                    <ModulesContainer
                      children={<InformeAjusteProduccionPage />}
                    />
                  }
                />
              }
            />
            <Route
              path="/informes/informe-balance-cartolas"
              index
              element={
                <LayoutFull
                  children={
                    <ModulesContainer
                      children={<InformeBalanceCartolasPage />}
                    />
                  }
                />
              }
            />
            {/* PRIVILEGIOS */}
            <Route
              path="/privilegios/roles"
              index
              element={
                <LayoutFull
                  children={<ModulesContainer children={<RolesPage />} />}
                />
              }
            />
            <Route
              path="/privilegios/menu"
              index
              element={
                <LayoutFull
                  children={<ModulesContainer children={<MenuPage />} />}
                />
              }
            />
            <Route
              path="/privilegios/usuarios"
              index
              element={
                <LayoutFull
                  children={<ModulesContainer children={<UsuariosPage />} />}
                />
              }
            />
          </Routes>
        </Suspense>
      </main>
    </BrowserRouter>
  );
};

export default Router;
