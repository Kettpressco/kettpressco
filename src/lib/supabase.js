import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://bqzhjlmyeoyrbzsuufcu.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJxemhqbG15ZW95cmJ6c3V1ZmN1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI5MTYzMDcsImV4cCI6MjA5ODQ5MjMwN30.2CFFTM7FeXVAghDSxeXMA3vDxZIMnfhxcnzplO44AvY";

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);
