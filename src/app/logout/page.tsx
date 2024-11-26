"use client";

import { supabase } from "@/utils/supabase/supabaseClient";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  //   any
  const onLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    if (password === confirmPassword) {
      e.preventDefault();
      try {
        const { error: signInError } = await supabase.auth.signInWithPassword({
          email: email,
          password: password,
        });
        if (signInError) {
          throw signInError;
        }
      } catch {
        alert("エラーが発生しました");
      }
    } else {
      alert("パスワードと確認用パスワードが異なります");
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col ">
      <div className="w-1/3 border-2 border-gray-500 rounded-xl p-12 ">
        <h1 className="text-3xl text-center font-bold mb-5 select-none">
          ログイン
        </h1>
        <form onSubmit={onLogin}>
          <div className="py-5 flex flex-col">
            <label htmlFor="email" className="mb-2">
              メールアドレス
            </label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              className="border border-gray-500 rounded-md p-2 outline-none"
            />
          </div>
          <div className="py-5 flex flex-col">
            <label htmlFor="password" className="mb-2">
              パスワード
            </label>
            <input
              type="password"
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
              className="border border-gray-500 rounded-md p-2 outline-none"
            />
          </div>
          <div className="py-5 flex flex-col">
            <label htmlFor="confirmPassword" className="mb-2">
              パスワード確認用
            </label>
            <input
              type="password"
              id="confirmPassword"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              autoComplete="new-password"
              className="border border-gray-500 rounded-md p-2 outline-none"
            />
          </div>
          <button className="w-full mt-4 text-white bg-red-600 px-3 py-2 rounded-full transition-all hover:bg-red-400 select-none">
            ログインする
          </button>
          <Link href="/">
            <p className="mt-8 text-right text-sm text-red-500 font-bold">
              アカウントの作成
            </p>
          </Link>
          <Link href="/">
            <p className="mt-4 text-right text-sm text-red-500 font-bold">
              パスワードをお忘れの方
            </p>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
