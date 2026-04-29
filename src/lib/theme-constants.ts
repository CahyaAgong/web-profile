export const professionalColors = {
  primary: '#1e3a5f',
  primaryRgba: 'rgba(30, 58, 95,',
  accent: '#0d9488',
  accentRgba: 'rgba(13, 148, 136,',
  background: '#fafaf9',
  backgroundSecondary: '#f1f5f9',
  backgroundTertiary: '#e2e8f0',
  text: '#1e3a5f',
  textSecondary: '#475569',
  textMuted: '#64748b',
  border: '#e2e8f0',
  white: '#ffffff',
} as const;

export const professionalDarkColors = {
  primary: '#3b5998',
  primaryRgba: 'rgba(59, 89, 152,',
  accent: '#14b8a6',
  accentRgba: 'rgba(20, 184, 166,',
  background: '#0f172a',
  backgroundSecondary: '#1e293b',
  backgroundTertiary: '#334155',
  text: '#e2e8f0',
  textSecondary: '#cbd5e1',
  textMuted: '#94a3b8',
  border: '#334155',
  white: '#1e293b',
} as const;

export const rpgColors = {
  primary: '#22c55e',
  primaryRgba: 'rgba(34, 197, 94,',
  accent: '#4ade80',
  accentRgba: 'rgba(74, 222, 128,',
  background: '#000000',
  backgroundSecondary: '#0a1f0a',
  backgroundTertiary: '#0f172a',
  text: '#ffffff',
  textSecondary: '#d1d5db',
  textMuted: '#9ca3af',
  border: '#22c55e',
  white: '#000000',
} as const;

export type ThemeMode = 'rpg' | 'professional';

export const themeColors = {
  rpg: rpgColors,
  professional: professionalColors,
  professionalDark: professionalDarkColors,
} as const;