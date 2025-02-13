"use client";

import { useRef } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Signup() {
  const username = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const router = useRouter();

  return (
    <div>
      <input
        className="border-2 p-2"
        type="text"
        placeholder="username"
        ref={username}
      />
      <input
        className="border-2 p-2"
        type="password" // Changed to "password" for security
        placeholder="password"
        ref={password}
      />
      <button
        onClick={async () => {
          if (username.current && password.current) { // Ensure both refs are not null
            try {
              await axios.post("http://localhost:3002/api/user", {
                username: username.current.value,
                password: password.current.value,
              });
              router.push("/");
            } catch (e) {
              console.log(e);
            }  
          }
        }}
      >
        Signup
      </button>
    </div>
  );
}
