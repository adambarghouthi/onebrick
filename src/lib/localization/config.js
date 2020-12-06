export const defaultLocale = 'en';

export const locales = ['en', 'ar'];

export const localeNames = {
  en: 'English',
  ar: 'العربية',
};

const directions = {
  ar: 'rtl',
};

export const localeDirection = (locale) => {
  return directions[locale] || 'ltr';
};
