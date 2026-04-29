import { professionalColors, rpgColors, type ThemeMode } from './theme-constants';

export interface ThemeColors {
  primary: string;
  primaryRgba: string;
  accent: string;
  accentRgba: string;
  background: string;
  backgroundSecondary?: string;
  backgroundTertiary?: string;
  text: string;
  textSecondary: string;
  textMuted: string;
  border: string;
  white?: string;
}

export function getThemeColors(mode: ThemeMode): ThemeColors {
  return mode === 'professional' ? professionalColors : rpgColors;
}

export function getNavbarColors(mode: ThemeMode) {
  const colors = getThemeColors(mode);
  
  if (mode === 'professional') {
    return {
      background: 'rgba(250, 250, 249, 0.95)',
      border: 'rgba(30, 58, 95, 0.3)',
      link: colors.primary,
      textMuted: colors.textMuted,
      textDefault: colors.textSecondary,
    };
  }
  
  return {
    background: 'rgba(0, 0, 0, 0.8)',
    border: colors.primary,
    link: colors.primary,
    textMuted: colors.textMuted,
    textDefault: colors.textSecondary,
  };
}

export function getFooterColors(mode: ThemeMode) {
  const colors = getThemeColors(mode);
  
  return {
    background: mode === 'professional' ? colors.white || '#ffffff' : colors.background,
    border: mode === 'professional' ? colors.border : colors.primary,
    text: colors.textMuted,
    icon: colors.primary,
    iconBg: mode === 'professional' 
      ? 'rgba(30, 58, 95, 0.1)' 
      : 'rgba(34, 197, 94, 0.2)',
  };
}