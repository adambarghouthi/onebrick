import React from 'react'
import { Select } from 'antd';
import { useRouter } from 'next/dist/client/router'
import { locales, languageNames } from 'lib/translations/config'
import { LocaleContext } from 'context/LocaleContext'

const LocaleSwitch = () => {
  const router = useRouter()
  const { locale } = React.useContext(LocaleContext)

  const handleChange = React.useCallback(
    (value) => {
      const regex = new RegExp(`^/(${locales.join('|')})`)
      router.push(router.pathname, router.asPath.replace(regex, `/${value}`))
    },
    [router]
  )

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
}

export default LocaleSwitch
