import type { APIRoute } from "astro";
import { getImage } from "astro:assets";
import icon from "../images/icon.png";

const ICON_SIZES = [192, 512];

export const GET: APIRoute = async () => {
  const icons = await Promise.all(
    ICON_SIZES.map(async (size) => {
      const image = await getImage({ src: icon, width: size, height: size, format: "png" });
      return { src: image.src, sizes: `${size}x${size}`, type: "image/png" };
    }),
  );

  return new Response(
    JSON.stringify({ name: "Jeff Terry", short_name: "Jeff Terry", start_url: "/", icons }),
    { headers: { "Content-Type": "application/manifest+json" } },
  );
};
