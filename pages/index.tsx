import Head from "next/head";
import React from "react";
import { useState } from "react";

export default function Home() {
  const [gender, setGender] = useState("man");
  const [age, setAge] = useState(30);
  const [help, setHelp] = useState("");
  const [loading, setLoading] = useState(false);

  const [result, setResult] = useState("");

  async function onSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();
    if (loading) {
      return;
    }
    setLoading(true);
    setResult("");
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ gender, age, help }),
    });
    const data = await response.json();
    setResult(data.result.replaceAll("\n", "<br />"));
    setLoading(false);
  }

  return (
    <div>
      <Head>
        <title>OpenAI Quickstart</title>
        <link rel="icon" href="/dog.png" />
      </Head>

      <main>
        <h3>Help generator 🎁 💡</h3>
        <form onSubmit={onSubmit}>
          <label>For whom is the help?</label>
          <select
            name="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="man">Man</option>
            <option value="woman">Woman</option>
          </select>
          <br />
          <label>Age</label>
          <input
            type="number"
            min={1}
            max={99}
            name="age"
            placeholder="Enter the age"
            value={age}
            onChange={(e) => setAge(Number.parseInt(e.target.value))}
          />
          <br />
          <label>How can I help you today?</label>
          <input
            type="text"
            name="help"
            placeholder="Enter the help"
            value={help}
            onChange={(e) => setHelp(e.target.value)}
          />
          <br />
          <button type="submit">Generate</button>
        </form>
        {loading}
        <div dangerouslySetInnerHTML={{ __html: result }} />
      </main>
    </div>
  );
}
