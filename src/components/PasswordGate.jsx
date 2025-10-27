import { useState } from "react";

export default function PasswordGate({ children }) {
  const [authorized, setAuthorized] = useState(false);
  const [input, setInput] = useState("");

  const checkPassword = () => {
    if (input === "zayan") setAuthorized(true);
    else alert("Falsches Passwort");
  };

  if (authorized) return children;

  return (
    <div className="fixed inset-0 bg-background flex flex-col items-center justify-center text-center">
      <h1 className="text-2xl mb-4 font-bold">Zugang geschützt</h1>
      <input
        type="password"
        placeholder="Passwort eingeben"
        className="border p-2 rounded mb-3"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={checkPassword}
        className="bg-primary text-white px-6 py-2 rounded"
      >
        Login
      </button>
    </div>
  );
}
