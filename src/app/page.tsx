'use client';

import { useState } from 'react';
import { useParallax } from 'react-scroll-parallax';

import { PropsWithChildren } from 'react';

export default function Home() {
  return (
    <main className='h-[9000px]'>
      <h1 className='text-5xl'>abcdefghijklmnopqrstuvwxyz</h1>
      <h1 className='text-5xl'>ABCDEFGHIJKLMNOPQRSTUVWXYZ</h1>
      <h1 className='text-5xl font-extrabold'>ABCDEFGHIJKLMNOPQRSTUVWXYZ</h1>
      <h1 className='text-5xl'>Hellow World!</h1>

      <TextBox />

      <Example />
    </main>
  );
}

function TextBox() {
  const [name, setName] = useState('Input your text here');

  return (
    <main>
      <h1 className='text-5xl'>{name}</h1>
      <input
        className='border-2 border-sky-100'
        type='text'
        onChange={(e: any) => setName(e.target.value)}
      />
    </main>
  );
}

const shared =
  'bg-blue-100 border-2 border-blue-500 border-solid rounded-lg h-14 w-14 flex items-center justify-center';

const Example = () => {
  const parallax = useParallax<HTMLDivElement>({
    rotate: [0, 360],
  });
  return (
    <BgContainer>
      <div ref={parallax.ref} className='spinner'>
        😵‍💫
        <div className='diamond'>💎</div>
        <div className='clown'>🤡</div>
        <div className='money'>💰</div>
        <div className='hand'>👌🏻</div>
      </div>
    </BgContainer>
  );
};

const BgContainer = (props: PropsWithChildren<{}>) => {
  return (
    <div className='my-2xl px-lg px-bg relative w-full overflow-hidden rounded-md bg-gray-900 py-96 text-black'>
      {/* <div className="h-screen" /> */}

      <div
        className='flex w-full flex-row items-center justify-evenly'
        style={{ perspective: '250px' }}
      >
        {props.children}
      </div>
      {/* <div className="h-screen" /> */}
    </div>
  );
};
