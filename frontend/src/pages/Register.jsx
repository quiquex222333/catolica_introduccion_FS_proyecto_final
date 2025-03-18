function Register() {
  return (
    <>
      <h1 className="text-5xl">Registrate ahora</h1>
      <form>
        <div class="flex justify-center">
          <div class="border-b border-gray-900/10 pb-12 w-1/2">
            <div class="mt-10">
              <div class="">
                <label
                  for="username"
                  class="block text-sm/6 font-medium text-gray-900"
                >
                  Nombre
                </label>
                <div class="mt-2">
                  <div class="rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-sky-500">
                    <input
                      type="text"
                      name="username"
                      id="username"
                      class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                      placeholder="Jhon Doe"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-10">
              <div class="">
                <label
                  for="email"
                  class="block text-sm/6 font-medium text-gray-900"
                >
                  Correo Electronico
                </label>
                <div class="mt-2">
                  <div class="rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-sky-500">
                    <input
                      type="text"
                      name="email"
                      id="email"
                      class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                      placeholder="JhonD@example.com"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-10">
              <div class="">
                <label
                  for="password"
                  class="block text-sm/6 font-medium text-gray-900"
                >
                  Contraseña
                </label>
                <div class="mt-2">
                  <div class="rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-sky-500">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <button
                type="submit"
                class="w-100 bg-sky-500/50 rounded-lg p-2 font-bold text-gray-700 hover:bg-sky-500 hover:text-white"
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
