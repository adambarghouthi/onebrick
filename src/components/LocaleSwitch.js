import React from 'react';
import { Select } from 'antd';
import { useRouter } from 'next/dist/client/router';
import { GlobalOutlined } from '@ant-design/icons';

import { localeNames } from 'lib/localization/config';

const LocaleSwitch = () => {
  const router = useRouter();
  const { locale, locales } = router;

  const handleChange = React.useCallback(
    (newLocale) => {
      router.push(router.pathname, router.pathname, { locale: newLocale });
    },
    [router]
  );

  return (
    <Select
      size="small"
      className="locale-switch"
      defaultValue={locale}
      onChange={handleChange}
    >
      {
        locales.map(locale => (
          <Select.Option key={locale} value={locale}>
            { localeNames[locale] }
          </Select.Option>
        ))
      }
    </Select>
  )
};

export default LocaleSwitch;
