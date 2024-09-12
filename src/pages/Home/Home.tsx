import { Divider } from "@nextui-org/react";

const Home = () => {
  return (
    <div className="flex flex-col w-full h-full text-greenSecondaryButton gap-5">
      <div className="flex  flex-col w-full gap-1">
        <h5 className="text-2xl font-semibold">
          Bienvenido al sistema de inventarios
        </h5>
        <p>
          Simplifica tu gestión y mantén todo bajo control de manera eficiente y
          segura.
        </p>
      </div>
      <Divider />
      <p>
        Haz click en los módulos del <strong>menú</strong> para navegar
      </p>
    </div>
  );
};

export default Home;
