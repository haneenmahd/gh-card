import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const allRoutes = ['', 'image'];
    const routes: MetadataRoute.Sitemap = allRoutes.map((route) => ({
        url: `https://gh-card.app/${route}`,
        lastModified: new Date()
    }));

    return [...routes];
}