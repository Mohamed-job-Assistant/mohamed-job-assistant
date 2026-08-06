export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { query, location = "Riyadh, Saudi Arabia" } = req.body || {};

    if (!query) {
      return res.status(400).json({ error: "Search query is required" });
    }

    const apiKey = process.env.SERPER_API_KEY;

    if (!apiKey) {
      return res.status(500).json({
        error: "SERPER_API_KEY is not configured"
      });
    }

    const response = await fetch("https://google.serper.dev/search", {
      method: "POST",
      headers: {
        "X-API-KEY": apiKey,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        q: `${query} jobs ${location}`,
        gl: "sa",
        hl: "en",
        num: 20
      })
    });

    if (!response.ok) {
      const text = await response.text();
      return res.status(response.status).json({
        error: "Serper search failed",
        details: text
      });
    }

    const data = await response.json();

    const results = (data.organic || []).map((item) => ({
      title: item.title || "",
      link: item.link || "",
      snippet: item.snippet || "",
      source: item.source || ""
    }));

    return res.status(200).json({
      success: true,
      query,
      location,
      results
    });
  } catch (error) {
    return res.status(500).json({
      error: "Server error",
      details: error.message
    });
  }
} 
