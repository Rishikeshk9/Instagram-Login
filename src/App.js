import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div class="h-screen bg-gray-50 flex flex-col justify-center items-center">
      <div class="sm:bg-white sm:border sm:border-gray-300 w-80 py-8 flex items-center flex-col mb-3">
        <h1 class="bg-no-repeat  instagram-logo"></h1>

        <form class="mt-8 w-64 flex flex-col">
          <input
            autofocus
            class="text-xs w-full mb-2 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
            id="email"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            placeholder="Phone number, username, or email"
            type="text"
          />
          <div className="bg-gray-100 border rounded border-gray-300 focus:border-gray-400 flex items-center mb-4">
            <input
              autofocus
              class="text-xs w-full  rounded border  px-2 py-2 focus:outline-none border-none outline-0 bg-gray-100 active:outline-none"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="Password"
              type={showPassword ? "text" : "password"}
            />
            <p
              onClick={() => setShowPassword(!showPassword)}
              className="px-2  scale-90  text-slate-600 font-semibold cursor-pointer hover:text-slate-800"
            >
              {showPassword ? "hide" : "Show"}
            </p>
          </div>
          <a
            class={`${
              username?.length > 5 && password?.length > 5
                ? "bg-blue-500"
                : "bg-blue-300"
            } text-sm text-center   text-white py-1 rounded font-medium`}
          >
            Log In
          </a>
        </form>
        <div class="flex justify-evenly space-x-2 w-64 mt-4">
          <span class="bg-gray-300 h-px flex-grow t-2 relative top-2"></span>
          <span class="flex-none uppercase text-xs text-gray-400 font-semibold">
            or
          </span>
          <span class="bg-gray-300 h-px flex-grow t-2 relative top-2"></span>
        </div>
        <button class="mt-4 flex">
          <div class="bg-no-repeat facebook-logo mr-1"></div>
          <span class="text-xs text-blue-900 font-semibold">
            Log in with Facebook
          </span>
        </button>
        <a class="text-xs text-blue-900 mt-4 cursor-pointer -mb-4">
          Forgotten your password?
        </a>
      </div>
      <div class="sm:bg-white sm:border sm:border-gray-300 text-center w-80 py-4">
        <span class="text-sm">Don't have an account?&nbsp;</span>
        <a class="text-blue-500 text-sm font-semibold">Sign up</a>
      </div>
      <div class="mt-3 text-center flex flex-col justify-center  ">
        <span class="text-xs">Get the app</span>
        <div class="flex mt-3 space-x-2">
          <img src="assets/gplay.png" class="bg-no-repeat w-36 h-11"></img>

          <img src="assets/appstore.png" class="bg-no-repeat w-36 h-11"></img>
        </div>
      </div>

      <p className="text-xs absolute bottom-4 text-slate-400 text-center mx-auto">
        © 2023 Instagram
        <img
          src="assets/meta.png"
          class="bg-no-repeat w-16 h-8  mt-1 mx-auto"
        ></img>
      </p>
    </div>
  );
}

export default App;
