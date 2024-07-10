import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeCharacters, setIncludeCharacters] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  function generatePassword() {
    const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const digits = "0123456789";
    const chars = "~!@#$%^&*()_+=-{}|";
    let choices = alphabets;

    let finalPassword = "";

    if (includeNumbers) choices = choices + digits;
    if (includeCharacters) choices = choices + chars;

    for (let i = 0; i < length; i++) {
      finalPassword += choices.charAt(
        Math.floor(Math.random() * choices.length + 1)
      );
    }

    setPassword(finalPassword);
  }

  const cachedGeneratePassword = useCallback(generatePassword, [
    length,
    includeCharacters,
    includeNumbers,
    setPassword,
  ]);

  function copyToClipboard() {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }

  useEffect(() => {
    cachedGeneratePassword();
  }, [length, includeNumbers, includeCharacters, cachedGeneratePassword]);

  return (
    <div className="bg-black h-screen p-8 flex flex-col justify-center">
      <div className="flex flex-col items-center justify-center gap-8">
        <h1 className="text-white text-center font-bold text-3xl sm:text-5xl">
          Password Generator
        </h1>

        <div className="bg-slate-700 h-52 w-full rounded-xl flex flex-col justify-center items-center gap-12">
          <div className="w-1/2">
            <input
              className="w-3/4 rounded-l-lg p-2 font-semibold text-orange-600"
              type="text"
              value={password}
              ref={passwordRef}
              readOnly
            />
            <button
              onClick={copyToClipboard}
              className="w-1/4 bg-teal-500 rounded-r-lg p-2 font-bold"
            >
              COPY
            </button>
          </div>
          <div className="w-full flex flex-row justify-around items-center">
            <div className="flex justify-center items-center gap-2 text-orange-400 text-lg">
              <input
                type="range"
                min="8"
                max="20"
                step="1"
                value={length}
                onChange={(e) => setLength(e.target.value)}
              />{" "}
              length ({length})
            </div>
            <div className="flex justify-center items-center gap-2 text-orange-400 text-lg">
              <input
                className="h-4 w-4"
                type="checkbox"
                defaultChecked={includeNumbers}
                onChange={() => setIncludeNumbers((prevValue) => !prevValue)}
              />{" "}
              Numbers
            </div>
            <div className="flex justify-center items-center gap-2 text-orange-400 text-lg">
              <input
                className="h-4 w-4"
                type="checkbox"
                defaultChecked={includeCharacters}
                onChange={() => setIncludeCharacters((prevValue) => !prevValue)}
              />{" "}
              Characters
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
