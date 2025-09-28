import React, { useState } from "react";
import Footer from "../components/Footer";

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  // ✅ Sign Up
  const handleSignUp = (e) => {
    e.preventDefault();
    if (!name1 ||!name2 ||!username || !email || !password) {
      alert("⚠️ Please fill all fields!");
      return;
    }

    // localStorage থেকে users array নেওয়া
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if email already exists
    const exists = users.some((user) => user.email === email);
    if (exists) {
      alert("❌ Email already exists! Try logging in.");
      return;
    }

    // নতুন user add করা
    users.push({ name1,name2,username, email, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("✅ Sign Up successful! Now Login.");

    // Form clear করা
    setIsLogin(true);
    setName1("");
    setName2("");
    setUserName("");
    setEmail("");
    setPassword("");
  };

  // ✅ Login
  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      alert(`🎉 Welcome back, ${user.name}!`);
      // Form clear করা
      setEmail("");
      setPassword("");
    } else {
      alert("❌ Invalid Email or Password!");
    }
  };

  return (
    <div id="login">
      <div className="mt-10 flex items-center justify-center min-h-screen bg-gray-200">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-center">
            {isLogin ? "Login" : "Sign Up"}
          </h2>

          {!isLogin && (
            <form onSubmit={handleSignUp} className="space-y-3">
              <input
                type="text"
                placeholder="First Name"
                value={name1}
                onChange={(e) => setName1(e.target.value)}
                className="w-full border p-2 rounded"
              />
              <input
                type="text"
                placeholder="Last Name"
                value={name2}
                onChange={(e) => setName2(e.target.value)}
                className="w-full border p-2 rounded"
              />
              <input
                type="text"
                placeholder="user name"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full border p-2 rounded"
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border p-2 rounded"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border p-2 rounded"
              />
              <button
                type="submit"
                className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
              >
                Sign Up
              </button>
            </form>
          )}

          {isLogin && (
            <form id="singup" onSubmit={handleLogin} className="space-y-3">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border p-2 rounded"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border p-2 rounded"
              />
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
              >
                Login
              </button>
            </form>
          )}

          <p className="mt-4 text-center text-sm">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-blue-500 underline"
            >
              {isLogin ? "Sign Up" : "Login"}
            </button>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
