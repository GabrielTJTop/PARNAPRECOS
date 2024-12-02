
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://kshaxcwjfdndiismnwam.supabase.co'
const supabaseKey = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtzaGF4Y3dqZmRuZGlpc21ud2FtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMwNzk5NjMsImV4cCI6MjA0ODY1NTk2M30.X1XENth4is9Xh5m_eZM-x4Bgy13SaCW4acBoCMUBBB4
const supabase = createClient(supabaseUrl, supabaseKey)