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

const Router = () => {
  return (
    <BrowserRouter basename="">
      <main className="min-h-screen flex w-full">
        <Suspense fallback={<Loading size="md" color="success" />}>
          <Routes>
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
          </Routes>
        </Suspense>
      </main>
    </BrowserRouter>
  );
};

export default Router;
