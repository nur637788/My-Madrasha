import React, { useState } from "react";
import { auth, db } from "../Firebase/firebaseInfo";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);

  // ✅ Sign Up Function
  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!name1 || !name2 || !username || !email || !password) {
      alert("⚠️ Please fill all fields!");
      return;
    }

    if (password.length < 6) {
      alert("⚠️ Password must be at least 6 characters!");
      return;
    }

    try {
      // 1️⃣ Firebase Authentication এ ইউজার তৈরি
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // 2️⃣ Firestore এ ইউজার ডেটা সংরক্ষণ
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name1,
        name2,
        username,
        email,
        password,
        checked,
        createdAt: new Date(),
      });

      alert("✅ Sign Up Successful!");
      setName1("");
      setName2("");
      setUserName("");
      setEmail("");
      setPassword("");
      setChecked(false);
      setIsLogin(true)
    } catch (error) {
      console.error("❌ Error:", error);
      alert(error.message);
    }
  };

  // ✅ Login Function
  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) return alert("⚠️ Please fill all fields!");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("✅ Login Successful!");
      setEmail("");
      setPassword("");
      navigate("/")
    } catch (error) {
      alert("❌ " + error.message);
    }
  };

  return (
    <div className="mt-10 bg-gray-200">
      <div className="flex items-center justify-center min-h-screen px-3">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-center">
            {isLogin ? "Login" : "Sign Up"}
          </h2>

          {/* 🔹 Sign Up Form */}
          {!isLogin && (
            <form onSubmit={handleSignUp} className="space-y-3">
              <input
                type="text"
                placeholder="First Name"
                value={name1} required
                onChange={(e) => setName1(e.target.value)}
                className="w-full border p-2 rounded"
              />
              <input
                type="text"
                placeholder="Last Name"
                value={name2} required
                onChange={(e) => setName2(e.target.value)}
                className="w-full border p-2 rounded"
              />
              <input
                type="text"
                placeholder="Username"
                value={username} required
                onChange={(e) => setUserName(e.target.value)}
                className="w-full border p-2 rounded"
              />
              <input
                type="email"
                placeholder="Email"
                value={email} required
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border p-2 rounded"
              />
              <input
                type="password"
                placeholder="Password"
                value={password} required
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border p-2 rounded"
              />

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="checked"
                  checked={checked} required
                  onChange={(e) => setChecked(e.target.checked)}
                  className="cursor-pointer"
                />
                <label htmlFor="checked" className="text-sm">
                  I'm agree{" "}
                  <Link to="/terms" className="text-blue-500 underline">
                    Terms & Conditions
                  </Link>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 hover:scale-95 transition"
              >
                Sign Up
              </button>
            </form>
          )}

          {/* 🔹 Login Form */}
          {isLogin && (
            <form onSubmit={handleLogin} className="space-y-3">
              <input
                type="email"
                placeholder="Email"
                value={email} required
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border p-2 rounded"
              />
              <input
                type="password"
                placeholder="Password"
                value={password} required
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border p-2 rounded"
              />
              <div className="text-end -mt-2 mb-4">
                <Link to="" className="text-blue-700 hover:text-blue-900">
                  Forgot Password?
                </Link>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 hover:scale-95 transition"
              >
                Login
              </button>
            </form>
          )}

          <p className="mt-4 text-center text-sm">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-blue-500 underline cursor-pointer"
            >
              {isLogin ? "Sign Up" : "Login"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
