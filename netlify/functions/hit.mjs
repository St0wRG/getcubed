import { getStore } from "@netlify/blobs";

// Compteur de visites anonyme : aucun cookie, aucune IP, aucune donnee personnelle.
// Cle = jour + source (?s=... dans l'URL partagee), valeur = nombre de hits.
export default async (req) => {
  const url = new URL(req.url);
  const raw = url.searchParams.get("s") || "direct";
  const s = raw.slice(0, 40).replace(/[^a-zA-Z0-9_-]/g, "") || "direct";
  const day = new Date().toISOString().slice(0, 10);
  const store = getStore("hits");
  const key = `${day}:${s}`;
  const cur = parseInt((await store.get(key)) || "0", 10);
  await store.set(key, String(cur + 1));
  return new Response(null, { status: 204, headers: { "cache-control": "no-store" } });
};

export const config = { path: "/api/hit" };
