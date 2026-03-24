import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("https://your-backend.onrender.com/login", data);

      localStorage.setItem("token", res.data.token);
      alert("Login successful");

      window.location.href = "/admin";
    } catch (err) {
      console.log(err.response?.data);
      alert("Login failed");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-black text-white">
      <section className="min-h-screen bg-black text-white px-10 py-20"></section>
      <h2 className="text-4xl font-bold text-center mb-12">
        Admin <span className="text-blue-400">Login</span>
      </h2>

      <form onSubmit={handleLogin} className="bg-gray-800 p-6 rounded-lg">
        <input
          type="email"
          placeholder="Email"
          className="p-3 mb-3 w-full bg-gray-200 text-black rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          /*className="p-2 mb-3 w-full bg-white text-black rounded"*/
          className="p-3 mb-3 w-full bg-gray-200 text-black rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />

        <button className="bg-blue-500 p-2 w-full">Login</button>
      </form>
    </div>
  );
};

export default Login;