export const getInitialTheme = (): string => {
  if (typeof window !== 'undefined') {
    const savedTheme = localStorage.getItem('data-theme');
    if (savedTheme) return savedTheme;

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  }
  return 'light';
};

export const saveTheme = (theme: string): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('data-theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }
};

export const switchTheme = (): string => {
  const currentTheme = getInitialTheme();
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  saveTheme(newTheme);
  return newTheme;
};

export const initializeTheme = (): void => {
  const theme = getInitialTheme();
  saveTheme(theme);
};

export const formatTime = (seconds: number) => {
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`
}