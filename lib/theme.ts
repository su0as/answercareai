export const colors = {
  bgPrimary: '#FAFAF8',
  bgSecondary: '#F5F3EE',
  bgDark: '#0F0F0F',
  textPrimary: '#1A1A1A',
  textSecondary: '#6B6B76',
  textMuted: '#9B9BA3',
  accentHome: '#C5553A',
  accentDental: '#2E6EB5',
  accentLegal: '#7A5C3E',
  accentRealEstate: '#B8612D',
  border: '#E8E3DC',
  borderSubtle: '#F0EDE7',
  success: '#2A7D4F',
} as const

export type VerticalKey = 'dental' | 'legal' | 'realestate'

export const verticalAccents: Record<VerticalKey, string> = {
  dental: colors.accentDental,
  legal: colors.accentLegal,
  realestate: colors.accentRealEstate,
}

export const verticalAccentClasses: Record<VerticalKey, {
  border: string
  text: string
  bg: string
  bgLight: string
  button: string
  buttonOutline: string
}> = {
  dental: {
    border: 'border-accent-dental',
    text: 'text-accent-dental',
    bg: 'bg-accent-dental',
    bgLight: 'bg-blue-50',
    button: 'bg-accent-dental hover:bg-blue-700 text-white',
    buttonOutline: 'border-accent-dental text-accent-dental hover:bg-blue-50',
  },
  legal: {
    border: 'border-accent-legal',
    text: 'text-accent-legal',
    bg: 'bg-accent-legal',
    bgLight: 'bg-amber-50',
    button: 'bg-accent-legal hover:bg-amber-900 text-white',
    buttonOutline: 'border-accent-legal text-accent-legal hover:bg-amber-50',
  },
  realestate: {
    border: 'border-accent-realestate',
    text: 'text-accent-realestate',
    bg: 'bg-accent-realestate',
    bgLight: 'bg-orange-50',
    button: 'bg-accent-realestate hover:bg-orange-700 text-white',
    buttonOutline: 'border-accent-realestate text-accent-realestate hover:bg-orange-50',
  },
}
