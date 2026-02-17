/**
 * Returns the correct path for public assets, accounting for
 * Vite's base path in production (e.g., /thetaindo/).
 */
export function asset(path: string): string {
    const base = import.meta.env.BASE_URL;
    // Remove leading slash from path to avoid double slashes
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    return `${base}${cleanPath}`;
}
