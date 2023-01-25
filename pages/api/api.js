import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
);

export default async function handler(req, res) {
  const { data } = await supabase.from("Track").select("*").order("id");
  res.status(200).json(data);
}
