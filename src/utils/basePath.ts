export const basePath = process.env.NODE_ENV === 'production' ? '/elective4pangasinanheritage' : '';

export function getImagePath(path: string): string {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${cleanPath}`;
}
