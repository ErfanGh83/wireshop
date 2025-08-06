export function formatRelativeTime(date: string | Date): string {
  const dateInstance = new Date(date);
  const now = Date.now();
  const diff = now - dateInstance.getTime();

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  if (years > 0) return `${years} سال پیش`;
  if (months > 0) return `${months} ماه و ${days % 30} روز پیش`;
  if (days > 0) return `${days} روز و ${hours % 24} ساعت پیش`;
  if (hours > 0) return `${hours} ساعت و ${minutes % 60} دقیقه پیش`;
  if (minutes > 0) return `${minutes} دقیقه پیش`;
  return `چند لحظه پیش`;
}
