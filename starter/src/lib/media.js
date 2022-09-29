import { getStrapiURL } from "./api";

// * when media is hosted locally, it uses a url like /uploads/... whereas when hosted on a CDN, it uses a url like https://cdn.strapi.io/...

export function getStrapiMedia(media) {
  const { url } = media.data.attributes;
  const imageUrl = url.startsWith("/") ? getStrapiURL(url) : url;
  return imageUrl;
}
