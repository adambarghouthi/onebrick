import React from 'react';
import { Select } from 'antd';
import { useRouter } from 'next/dist/client/router';
import { locales, languageNames } from 'lib/translations/config';

const LocaleSwitch = () => {
  const router = useRouter();
  const { locale } = router;

  const handleChange = React.useCallback(
    (newLocale) => {
      router.push(router.pathname, router.pathname, { locale: newLocale });
    },
    [router]
  );

  return (
     <Select
      className="locale-switch"
      defaultValue={locale}
      onChange={handleChange}
      >
      {
        locales.map(locale => (
          <Select.Option key={locale} value={locale}>
            { languageNames[locale] }
          </Select.Option>
        ))
      }
    </Select>
  )
};

export default LocaleSwitch;
