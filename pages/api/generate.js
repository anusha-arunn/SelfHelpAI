import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const { gender, age, help } = req.body;
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: generatePrompt(gender, age, help),
    temperature: 0.9,
    max_tokens: 2048,
  });
  res.status(200).json({ result: completion.data.choices[0].text });
}
function generatePrompt(gender, age, help) {
  return `for a ${age} years old ${gender} that ${help}.`;
}
