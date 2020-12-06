import { useContext } from 'react';
import { useRouter } from 'next/dist/client/router';

import strings from './strings';
import { defaultLocale, localeDirection } from './config';

export default function useLocalization() {
  const { locale } = useRouter();
  const dir = localeDirection(locale);

  function t(key) {
    if (!strings[locale][key]) {
      console.warn(`Translation '${key}' for locale '${locale}' not found.`);
    }
    return strings[locale][key] || strings[defaultLocale][key] || '';
  }

  return {
    t,
    dir,
  };
}
