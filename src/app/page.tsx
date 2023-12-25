"use client";

import { useState } from "react"

export default function Home() {
  return (
    <main>
      <h1 className="text-5xl">abcdefghijklmnopqrstuvwxyz</h1>
      <h1 className="text-5xl">ABCDEFGHIJKLMNOPQRSTUVWXYZ</h1>
      <h1 className="font-extrabold text-5xl">ABCDEFGHIJKLMNOPQRSTUVWXYZ</h1>
      <h1 className="text-5xl">Hellow World!</h1>

      <TextBox />
    </main>
  )
}

function TextBox() {
  const [text, setName] = useState('');

  return (
    <main>
      <input className="border-sky-100 border-2" type="text" name="" id="" />
    </main>
  )
}
