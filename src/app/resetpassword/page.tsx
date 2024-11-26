"use client";

import { supabase } from "@/utils/supabase/supabaseClient";
import { useRouter } from "next/navigation";
import { useState } from "react";

const ResetPasswordPage = () => {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onResetPassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { error: passwordResetError } = await supabase.auth.updateUser({
        password,
      });
      if (passwordResetError) {
        throw passwordResetError;
      }
      await router.push("/top");
      alert("パスワード変更が完了しました");
    } catch (error) {
      alert("エラーが発生しました");
    }
  };
  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col ">
      <div className="w-1/3 border-2 border-gray-500 rounded-xl p-12 ">
        <title>パスワード再登録画面</title>
        <h1 className="text-3xl text-center font-bold mb-5 select-none">
          新規登録画面
        </h1>

        <form onSubmit={onResetPassword}>
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
          <div>
            <button
              type="submit"
              className="w-full mt-4 text-white bg-red-600 px-3 py-2 rounded-full transition-all hover:bg-red-400 select-none"
            >
              パスワード変更
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
