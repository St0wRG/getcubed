import { getStore } from "@netlify/blobs";

// Lecture des compteurs : JSON { "YYYY-MM-DD:source": nombre }
export default async () => {
  const store = getStore("hits");
  const { blobs } = await store.list();
  const out = {};
  for (const b of blobs) {
    out[b.key] = parseInt((await store.get(b.key)) || "0", 10);
  }
  return Response.json(out, { headers: { "cache-control": "no-store" } });
};

export const config = { path: "/api/stats" };
