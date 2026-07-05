# Supabase setup guide

1. Create a Supabase project at https://supabase.com.
2. In Project Settings > API, copy the project URL and anon key.
3. Create a `.env.local` file in the project root with:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

4. In the SQL editor, run the contents of [src/lib/supabase/schema.sql](src/lib/supabase/schema.sql).
5. Create a storage bucket named `resumes` with public read access.
6. Restart the app with `npm run dev`.
