import uz from './uz.json';
import ru from './ru.json';
import en from './en.json';

export const languages = {
  uz: 'O\'zbekcha',
  ru: 'Русский',
  en: 'English'
} as const;

export const defaultLang = 'uz';

export type Lang = keyof typeof languages;

const translations = { uz, ru, en } as const;

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: string): string {
    const keys = key.split('.');
    let result: any = translations[lang];

    for (const k of keys) {
      if (result && typeof result === 'object' && k in result) {
        result = result[k];
      } else {
        // Fallback to default language
        result = translations[defaultLang];
        for (const fallbackKey of keys) {
          if (result && typeof result === 'object' && fallbackKey in result) {
            result = result[fallbackKey];
          } else {
            return key; // Return key if translation not found
          }
        }
        break;
      }
    }

    return typeof result === 'string' ? result : key;
  };
}

export function getLocalizedUrl(url: URL, lang: Lang): string {
  const [, currentLang, ...rest] = url.pathname.split('/');

  // Check if current path has a language prefix
  if (currentLang in languages) {
    // Replace current language with new one
    if (lang === defaultLang) {
      // For default language, remove prefix
      return '/' + rest.join('/') || '/';
    }
    return '/' + lang + '/' + rest.join('/');
  } else {
    // No language prefix in current URL
    if (lang === defaultLang) {
      return url.pathname;
    }
    return '/' + lang + url.pathname;
  }
}

export function getPathWithoutLang(pathname: string): string {
  const [, possibleLang, ...rest] = pathname.split('/');
  if (possibleLang in languages) {
    return '/' + rest.join('/') || '/';
  }
  return pathname;
}

// Get all translations for a specific language
export function getTranslations(lang: Lang) {
  return translations[lang];
}
