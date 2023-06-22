"use client"
import { useState, useDeferredValue } from 'react';

const Page = () => {
  const [text, setText] = useState("");

  const deferredText = useDeferredValue(text);

  console.log(text, deferredText);

  return (
    <>
      <h1>Example of useDeferredValue</h1>
      <p>
        <input className='text-black' value={text} onChange={e => setText(e.currentTarget.value)} />
      </p>
      <p>{deferredText}</p>
    </>
  );
};

export default  Page;