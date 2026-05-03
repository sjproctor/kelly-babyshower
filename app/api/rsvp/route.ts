export async function POST(req: Request) {
  const body = await req.json()

  const res = await fetch(
    `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${encodeURIComponent(process.env.AIRTABLE_TABLE_NAME!)}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.AIRTABLE_TOKEN}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        fields: {
          Name: body.name,
          "Number of Guests": Number(body.guests),
          Email: body.email,
          Message: body.message
        }
      })
    }
  )

  if (!res.ok) {
    const errorBody = await res.text()
    console.error("Airtable error:", res.status, errorBody)
    return Response.json({ error: "Failed", details: errorBody }, { status: 500 })
  }
  return Response.json({ success: true })
}
