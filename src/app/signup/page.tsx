"use client";

import { supabase } from "@/utils/supabase/supabaseClient";
import { useState } from "react";
import { useRouter } from "next/navigation";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const onSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    if (password === confirmPassword) {
      e.preventDefault();
      try {
        const { error: signUpError } = await supabase.auth.signUp({
          email: email,
          password: password,
        });
        if (signUpError) {
          throw signUpError;
        }
        alert("登録完了メールを確認してください");
      } catch (error) {
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
          新規登録画面
        </h1>

        <form onSubmit={onSignUp}>
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
          <button
            className="w-full mt-4 text-white bg-red-600 px-3 py-2 rounded-full transition-all hover:bg-red-400 select-none"
            type="submit"
          >
            サインアップ
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
