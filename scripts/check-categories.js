import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://bqzhjlmyeoyrbzsuufcu.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJxemhqbG15ZW95cmJ6c3V1ZmN1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI5MTYzMDcsImV4cCI6MjA5ODQ5MjMwN30.2CFFTM7FeXVAghDSxeXMA3vDxZIMnfhxcnzplO44AvY"
);

const { data, error } = await supabase
  .from("products")
  .select("category")
  .limit(100);

if(error){
  console.log(error);
  process.exit();
}

const categories = [
  ...new Set(
    data.map(item => item.category)
  )
];

console.log(categories);