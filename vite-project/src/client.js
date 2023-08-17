import { createClient } from '@supabase/supabase-js';

const URL = 'https://weyzzruooybhjhelvaon.supabase.co';

const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndleXp6cnVvb3liaGpoZWx2YW9uIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIyNTA5OTMsImV4cCI6MjAwNzgyNjk5M30.AaHU1doc03MyHOR7dlrX3Lfvjce2m_-g-mZ7mZhMzsw';

// const supabase = createClient(URL, API_KEY);


export const supabase = createClient(URL, API_KEY);

