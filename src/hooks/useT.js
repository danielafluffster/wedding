import { useLanguage } from '../context/LanguageContext';
import { i18n } from '../config/i18n';

export function useT() {
  const { lang } = useLanguage();
  return i18n[lang || 'en'];
}
