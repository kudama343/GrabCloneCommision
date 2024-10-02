// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://yzcozynozifjfomrmirp.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl6Y296eW5vemlmamZvbXJtaXJwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyMjI1NDk3MSwiZXhwIjoyMDM3ODMwOTcxfQ.1_cueQocWFidQc2E1Ym1iG_cdZMmsJ4CZ4vbj6PYCK8';

export  const supabase = createClient(supabaseUrl, supabaseKey);

