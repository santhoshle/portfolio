// Formats a post's YYYY-MM-DD date in UTC so it reads the same on server and client
export function formatPostDate(date: string, month: 'short' | 'long' = 'short'): string {
  return new Date(date).toLocaleDateString('en-US', { year: 'numeric', month, day: 'numeric', timeZone: 'UTC' });
}
