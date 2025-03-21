import { useState } from "react";
import { useNavigate } from "react-router";
import { createUser } from "../core/api/users.api";

function Register() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUser({
        name: name,
        email: email,
        password: password,
      });
      navigate("/");
    } catch (error) {
      window.alert("Los datos son incorrectos verificalos");
    }
  };

  return (
    <>
      <h1 className="text-5xl">Registrate ahora</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-center">
          <div className="border-b border-gray-900/10 pb-12 w-1/2">
            <div className="mt-10">
              <div className="">
                <label
                  htmlFor="username"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Nombre
                </label>
                <div className="mt-2">
                  <div className="rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-sky-500">
                    <input
                      type="text"
                      name="username"
                      id="username"
                      className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                      placeholder="Jhon Doe"
                      onChange={(e) => {
                        setname(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <div className="">
                <label
                  htmlFor="email"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Correo Electronico
                </label>
                <div className="mt-2">
                  <div className="rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-sky-500">
                    <input
                      type="text"
                      name="email"
                      id="email"
                      className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                      placeholder="JhonD@example.com"
                      onChange={(e) => {
                        setemail(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <div className="">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Contraseña
                </label>
                <div className="mt-2">
                  <div className="rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-sky-500">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                      onChange={(e) => {
                        setpassword(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <button
                type="submit"
                className="w-1/2 md:w-100 bg-sky-500/50 rounded-lg p-2 font-bold text-gray-700 hover:bg-sky-500 hover:text-white"
              >
                Crear Cuenta
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Register;
