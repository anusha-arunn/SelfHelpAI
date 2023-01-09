import Head from "next/head";
import React from "react";
import { useState } from "react";

export default function SelfHelp() {
  const [gender, setGender] = useState("man");
  const [emotion, setEmotion] = useState("");
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
        <label>How do you feel today?</label>
        <select
          name="emotion"
          value={emotion}
          onChange={(e) => setEmotion(e.target.value)}
        >
          <option value="happy">Happy</option>
          <option value="sad">Sad</option>
          <option value="frustrated">Frustrated</option>
          <option value="angry">Angry</option>
          <option value="excited">Excited</option>
          <option value="nervous">Nervous</option>
          <option value="calm">Calm</option>
          <option value="content">Content</option>
          <option value="disappointed">Disappointed</option>
          <option value="anxious">Anxious</option>
        </select>
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
    </div>
  );
}
