import { useState } from "react";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });
    if (res.ok) {
      alert("Signup successful!");
    } else {
      alert("Signup failed");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form onSubmit={handleSignup} className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Sign Up</h2>
        <input type="text" placeholder="Name" className="border p-2 rounded w-full mb-3" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="Email" className="border p-2 rounded w-full mb-3" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" className="border p-2 rounded w-full mb-3" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded w-full">Sign Up</button>
      </form>
    </div>
  );
}
