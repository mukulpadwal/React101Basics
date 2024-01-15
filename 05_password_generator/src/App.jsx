import { useCallback, useEffect, useState, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [isNumberIncluded, setIsNumberIncluded] = useState(false);
  const [isCharIncluded, setIsCharIncluded] = useState(false);
  const [password, setPassword] = useState('');
  const passFieldReference = useRef(null);

  const createPassword = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if(isNumberIncluded) str += '0123456789';
    if(isCharIncluded) str += '!@#$%^&*()~{}[]:;",<>.?/';

    for(let i=1; i<length; i++) {
      let randomChar = Math.random() * str.length + 1;

      pass += str.charAt(randomChar);
    }

    setPassword(pass);

  }, [length, isNumberIncluded, isCharIncluded, setPassword]);

  const handleCopyPassword = () => {
    passFieldReference.current?.select();
    window.navigator.clipboard.writeText(password);
  }

  useEffect(() => {
    createPassword();
  }, [length, isCharIncluded, isNumberIncluded, createPassword])

  return (
        <div className="bg-gray-700 h-screen w-full">
          <h1 className="text-center text-white font-bold text-3xl py-3">PASSWORD GENERATOR</h1>
          <div className="flex justify-center items-center my-4">
            <input ref={passFieldReference} type="text" className="rounded-full rounded-tr-none rounded-br-none p-2" value={password} />
            <button className="bg-blue-600 hover:bg-blue-300 rounded-tl-none rounded-bl-none rounded-full p-2" onClick={handleCopyPassword}>COPY</button>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-white py-8 border mx-4 rounded-xl">
            <div className="flex justify-center items-center gap-2">
              <input className="cursor-pointer" type="range" id="sliderRange" min={8} max={20} step={1} value={length} onChange={(event) => {setLength(event.target.value)}} />
              <label htmlFor="sliderRange">Length : {length}</label>
            </div>
            <div className="flex justify-center items-center gap-2">
              <input type="checkbox" id="includeNumber" onChange={() => setIsNumberIncluded(prev => !prev)} />
              <label htmlFor="includeNumber">INCLUDE NUMBER</label>
            </div>
            <div className="flex justify-center items-center gap-2">
            <input type="checkbox" id="includeCharacters" onChange={() => setIsCharIncluded(prev => !prev)} />
              <label htmlFor="includeCharacters">INCLUDE SPECIAL CHARACTERS</label>
            </div>
          </div>
        </div>
  );
}

export default App;
