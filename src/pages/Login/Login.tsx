import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoCMPC from "@/assets/images/LogoCMPC.png";
import InventoryLogin from "@/assets/images/logoInventory.png";
import LogoAzure from "@/assets/images/Azure.svg";
import InputCustom from "@/components/Input/InputCustom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    navigate("/home");
  };
  return (
    <div className="flex w-full h-full">
      <div className="flex w-2/4 bg-login-background bg-cover"></div>
      <div className="flex w-3/4">
        <div className="flex w-full h-full flex-col items-center gap-6 pt-20">
          <div className="justify-start">
            <div className="logo mb-4">
              <img src={LogoCMPC} alt="CMPC Logo" />
            </div>
            <div className="title mb-4">
              <img
                src={InventoryLogin}
                alt="CMPC Logo Inventarios"
                className="title-logo"
              />
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-black/70">
                Para acceder, debes iniciar sesión
              </p>
              <form onSubmit={() => handleSubmit} className="w-100">
                <div className="mb-3">
                  <InputCustom
                    type="email"
                    placeholder="nombreapellido@cmpc.cl"
                    required
                    className="min-w-56 w-72 border border-black/40 rounded-md pl-10 pr-2 py-2 text-left"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="flex gap-2 mb-6">
                  <InputCustom
                    type="password"
                    placeholder="Contraseña"
                    required
                    className="min-w-56 w-72 border border-black/40 rounded-md pl-10 pr-2 py-2 text-left"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="w-72 bg-gradient-to-b from-greenPrimaryButton to-greenSecondaryButton text-white font-bold p-2 rounded-md tracking-widest"
                >
                  INGRESAR
                </button>
              </form>
              <div className="flex items-center gap-2">
                <p className="text-xs text-black/30">No puedo ingresar. </p>
                <span className="text-xs underline decoration-solid text-greenPrimaryButton">
                  Ver posibles causas y soluciones
                </span>
              </div>
              <div className="flex flex-col pt-10">
                <hr />
                <img src={LogoAzure} alt="Azure Logo" className="w-32 h-20" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
