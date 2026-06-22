import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://uvjnvsqkjjazbcnegauj.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV2am52c3FramphemJjbmVnYXVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE4MTc2MjIsImV4cCI6MjA5NzM5MzYyMn0.PYz9pLOHVLLQDO_wsTPZHVioawkiVJ4CNlu0651e7BY';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
