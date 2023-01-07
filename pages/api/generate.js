import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const { gender, age, emotion, help } = req.body;
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: generatePrompt(
      gender,
      age,
      emotion,
      `Help with ${emotion} at ${age} and a ${gender}`
    ),
    temperature: 0.7,
    max_tokens: 2048,
  });
  res.status(200).json({ result: completion.data.choices[0].text });
}
function generatePrompt(gender, age, emotion, help) {
  return `Help with ${emotion} at ${age} and a ${gender}`;
}
