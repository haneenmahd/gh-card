import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const allRoutes = ['', 'image'];
    const routes: MetadataRoute.Sitemap = allRoutes.map((route) => ({
        url: `https://next-13-mu.vercel.app/${route}`,
        lastModified: new Date()
    }));

    return [...routes];
}