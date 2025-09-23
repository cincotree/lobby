export function assetPath(path: string): string {
  return path.startsWith('/') ? path : `/${path}`;
}