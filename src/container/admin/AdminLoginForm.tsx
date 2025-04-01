"use client";

import AdminLoginInputField from "@/components/admin/login/AdminLoginInputField";
import AdminLoginButton from "@/components/admin/login/AdminLoginButton";

import { useState } from "react";
// import { API_SERVER_ADDRESS } from "@/constant/api_address";

export default function AdminLoginForm() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const response = await fetch(`https://api.yoy0z-maps.com/users/login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, password: password }),
    });
    const data = await response.json();
    console.log(data);
    // 이거를 이제 클라이언트랑 서버 컴포넌트에서 가져올 수 있게 처리해야함
    // getUserClient(), getUserServer() 이렇게 만들어서
  };

  return (
    <form className="flex flex-col gap-10">
      <AdminLoginInputField
        type="text"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <AdminLoginInputField
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <AdminLoginButton text="Login" onClick={handleSubmit} />
    </form>
  );
}
