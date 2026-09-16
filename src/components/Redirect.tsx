"use client";

import { useEffect } from "react";

export default function Redirect({ to, label }: { to: string; label: string }) {
  useEffect(() => {
    window.location.replace(to);
  }, [to]);

  return (
    <div className="mx-auto flex min-h-[60vh] max-w-2xl flex-col justify-center px-6">
      <h1 className="text-3xl leading-tight">This page has moved.</h1>
      <p className="mt-4 leading-relaxed text-gray-600">
        You are being taken to {label}. If nothing happens,{" "}
        <a href={to} className="text-gray-900 underline underline-offset-4">
          follow this link
        </a>
        .
      </p>
    </div>
  );
}
