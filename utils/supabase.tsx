import "react-native-url-polyfill/auto";
import { createClient } from "@supabase/supabase-js";
import AsyncStorage from "@react-native-async-storage/async-storage";

const supabaseUrl = "https://vcsbgkqromdvybadxjnx.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZjc2Jna3Fyb21kdnliYWR4am54Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzcxNDc3MzAsImV4cCI6MTk5MjcyMzczMH0.pRlH8_OumJkvqJm4cM-Pi251BxePLhvZkDeoXOmEu2w";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage as any,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
