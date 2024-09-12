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
          </Routes>
        </Suspense>
      </main>
    </BrowserRouter>
  );
};

export default Router;
