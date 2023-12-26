'use client';

import { useState } from 'react';

export default function Home() {
  return (
    <main>
      <h1 className='text-5xl'>abcdefghijklmnopqrstuvwxyz</h1>
      <h1 className='text-5xl'>ABCDEFGHIJKLMNOPQRSTUVWXYZ</h1>
      <h1 className='text-5xl font-extrabold'>ABCDEFGHIJKLMNOPQRSTUVWXYZ</h1>
      <h1 className='text-5xl'>Hellow World!</h1>

      <TextBox />
    </main>
  );
}

function TextBox() {
  const [name, setName] = useState('');

  return (
    <main>
      <h1 className='text-5xl'>{name}</h1>
      <input className='border-2 border-sky-100' type='text' name='' id='' />
    </main>
  );
}
