# Mohamed Job Assistant v3 — Search Backend

## What this version does
- Mobile web interface.
- Searches Google results through Serper from a server-side Vercel Function.
- Targets LinkedIn Jobs, Indeed Saudi Arabia, and Bayt.
- Filters by Riyadh and the selected career track.
- Scores results and chooses Procurement / F&B / Combined CV.

## Required
Create a Serper API key and add it in Vercel as:
SERPER_API_KEY

Do NOT put the key in index.html. Vercel environment variables are designed for secrets/API keys.

## Deploy
1. Create a Vercel account.
2. Import this folder/repository.
3. Add `SERPER_API_KEY` under Project Settings > Environment Variables.
4. Deploy.
5. Open the Vercel URL on the phone.

## Important
This searches public search results and opens the original job page. It does not log into LinkedIn/Indeed/Bayt, bypass CAPTCHAs, or auto-submit applications.
