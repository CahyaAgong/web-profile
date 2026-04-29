import { 
  professionalColors, 
  professionalDarkColors, 
  rpgColors, 
  type ThemeMode 
} from './theme-constants';

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

export function getThemeColors(mode: ThemeMode, isDarkMode: boolean = false): ThemeColors {
  if (mode === 'professional') {
    return isDarkMode ? professionalDarkColors : professionalColors;
  }
  return rpgColors;
}

export function getNavbarColors(mode: ThemeMode, isDarkMode: boolean = false) {
  const colors = getThemeColors(mode, isDarkMode);
  
  if (mode === 'professional') {
    return {
      background: isDarkMode 
        ? 'rgba(15, 23, 42, 0.95)' 
        : 'rgba(250, 250, 249, 0.95)',
      border: isDarkMode 
        ? 'rgba(51, 65, 85, 0.5)' 
        : 'rgba(30, 58, 95, 0.3)',
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

export function getFooterColors(mode: ThemeMode, isDarkMode: boolean = false) {
  const colors = getThemeColors(mode, isDarkMode);
  
  return {
    background: mode === 'professional' 
      ? (isDarkMode ? colors.white || '#1e293b' : colors.white || '#ffffff')
      : colors.background,
    border: mode === 'professional' 
      ? (isDarkMode ? '#334155' : colors.border)
      : colors.primary,
    text: colors.textMuted,
    icon: colors.primary,
    iconBg: mode === 'professional' 
      ? (isDarkMode ? 'rgba(59, 89, 152, 0.2)' : 'rgba(30, 58, 95, 0.1)')
      : 'rgba(34, 197, 94, 0.2)',
  };
}