import ButtonCustom from "@/components/Button/ButtonCustom";
import TablaDetalleInventarios from "./components/DetalleInventarios/TablaDetalleInventarios";
import TablaInventarios from "./components/Inventarios/TablaInventarios";
import FiltrosProcesosCerrados from "./FiltrosProcesosCerrados";
import TablaInventariosConciliacion from "./components/InventariosConciliacion/TablaInventariosConciliacion";
import TablaDetalleInventariosConciliacion from "./components/DetalleInventariosConciliacion/TablaDetalleInventariosConciliacion";

const ProcesosCerrados = () => {
  return (
    <div className="flex w-full h-full pt-5">
      <div className="flex flex-col w-full h-full">
        <FiltrosProcesosCerrados />
        <div className="flex flex-col pt-5 gap-4">
          <TablaInventarios />
          <TablaDetalleInventarios />
          <div className="flex flex-col w-full gap-4">
            <div className="flex w-full">
              <p className="text-lg text-greenSecondaryButton font-semibold">
                Conciliación
              </p>
              <div className="flex ml-auto gap-4">
                <ButtonCustom
                  title="Abrir"
                  className="py-2 bg-greenSecondaryButton text-white rounded-md"
                />
                <ButtonCustom
                  title="Informe de Conciliación"
                  className="py-2 bg-greenSecondaryButton text-white rounded-md"
                />
              </div>
            </div>
            <div className="flex w-full bg-greenSecondaryButton h-1"></div>
          </div>
          <div className="flex flex-col w-full gap-4">
            <TablaInventariosConciliacion />
            <TablaDetalleInventariosConciliacion />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcesosCerrados;
