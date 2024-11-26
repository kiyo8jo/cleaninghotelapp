"use client";

import { supabase } from "@/utils/supabase/supabaseClient";
import React, { useState } from "react";

const SendResetMailPage = () => {
  const [email, setEmail] = useState("");
  console.log(email);

  const onSendResetMail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { error: sendEmailError } =
        await supabase.auth.resetPasswordForEmail(email, {
          redirectTo: "http://localhost:3000/passwordReset/",
        });
      if (sendEmailError) {
        throw sendEmailError;
      }
      alert("パスワード設定メールを確認してください");
    } catch (error) {
      alert("エラーが発生しました");
    }
  };
  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col ">
      <div className="w-1/3 border-2 border-gray-500 rounded-xl p-12 ">
        <h1 className="text-3xl text-center font-bold mb-5 select-none">
          パスワードリセット
        </h1>
        <form onSubmit={onSendResetMail}>
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
          <button className="w-full mt-4 text-white bg-red-600 px-3 py-2 rounded-full transition-all hover:bg-red-400 select-none">
            メールを送信
          </button>
        </form>
      </div>
    </div>
  );
};

export default SendResetMailPage;
