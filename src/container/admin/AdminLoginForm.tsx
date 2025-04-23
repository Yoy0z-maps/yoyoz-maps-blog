"use client";

import AdminLoginInputField from "@/components/admin/login/AdminLoginInputField";
import AdminLoginButton from "@/components/admin/login/AdminLoginButton";
import { API_SERVER_ADDRESS } from "@/constant/api_address";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginForm() {
  const router = useRouter();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);

    const response = await fetch(`${API_SERVER_ADDRESS}/users/login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, password: password }),
      credentials: "include",
    });

    if (response.ok) {
      router.push("/admin");
    } else {
      alert(
        "로그인 실패. 아이디나 비밀번호 혹은 네트워크 상태를 확인해주세요."
      );
    }
    setIsLoading(false);
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
      <AdminLoginButton
        text="Login"
        onClick={handleSubmit}
        isLoading={isLoading}
      />
    </form>
  );
}
