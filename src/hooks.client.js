// src/hooks.client.js
import { theme } from '$lib/stores/theme';

export const handleClientInit = () => {
  const storedTheme = localStorage.getItem('theme') || 'light';
  theme.set(storedTheme);
};
