"use client";

import AdminLoginInputField from "@/components/admin/login/AdminLoginInputField";
import AdminLoginButton from "@/components/admin/login/AdminLoginButton";

import { useState } from "react";

export default function AdminLoginForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = () => {
    console.log(email, password);
  };

  return (
    <form className="flex flex-col gap-10">
      <AdminLoginInputField
        type="text"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <AdminLoginInputField
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <AdminLoginButton text="Login" handleSubmit={handleSubmit} />
    </form>
  );
}
