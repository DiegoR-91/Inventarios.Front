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
const VerInventariosPage = lazy(
  () => import("@/pages/SCI/VerInventarios/VerInventarios")
);
const RevisarInventariosPage = lazy(
  () => import("@/pages/SCI/RevisarInventarios/RevisarInventarios")
);
const InformeInventariosPage = lazy(
  () => import("@/pages/SCI/InformeInventarios/InformeInventarios")
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
              path="/inventarios-mermas"
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
              path="/mantencion-cartolas"
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
              path="/productos-excluidos"
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
              path="/novedades"
              index
              element={
                <LayoutFull
                  children={<ModulesContainer children={<NovedadesPage />} />}
                />
              }
            />
            {/* MODULO PROCESOS */}
            <Route
              path="/conciliacion"
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
              path="/procesos-cerrados"
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
              path="/eliminar-procesos"
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
            <Route
              path="/ver-inventarios"
              index
              element={
                <LayoutFull
                  children={
                    <ModulesContainer children={<VerInventariosPage />} />
                  }
                />
              }
            />
            <Route
              path="/revisar-inventarios"
              index
              element={
                <LayoutFull
                  children={
                    <ModulesContainer children={<RevisarInventariosPage />} />
                  }
                />
              }
            />
            <Route
              path="/informe-inventarios"
              index
              element={
                <LayoutFull
                  children={
                    <ModulesContainer children={<InformeInventariosPage />} />
                  }
                />
              }
            />
            {/* MODULO INFORMES */}
            <Route
              path="/informe-novedades"
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
              path="/informe-conciliacion"
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
              path="/informe-ajuste"
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
              path="/informe-ajuste-produccion"
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
              path="/informe-balance-cartolas"
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
              path="/roles"
              index
              element={
                <LayoutFull
                  children={<ModulesContainer children={<RolesPage />} />}
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
