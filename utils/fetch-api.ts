// Strapi fetchers (blogs, media, newsletters, etc.)

// TODO: Replace with your actual Strapi API URL from .env.local
const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

export async function getAllNewsletters() {
  try {
    const res = await fetch(`${STRAPI_URL}/api/newsletters?populate=*`);
    if (!res.ok) throw new Error(`Strapi ${res.status}`);
    const data = await res.json();
    return data.data ?? [];
  } catch (err) {
    console.error("getAllNewsletters failed:", err);
    return []; // page can render "no newsletters" instead of crashing
  }
}

export async function getNewsletterBySlug(slug: string) {
  try {
    const res = await fetch(`${STRAPI_URL}/api/newsletters?filters[slug][$eq]=${slug}&populate=*`);
    if (!res.ok) throw new Error(`Strapi ${res.status}`);
    const data = await res.json();
    return data.data?.[0] || null;
  } catch (err) {
    console.error("getNewsletterBySlug failed:", err);
    return [];
  }
}
