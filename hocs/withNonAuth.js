import React, { useEffect, useContext } from 'react' 
import { useDispatch, useSelector } from 'react-redux'
import { getDisplayName } from 'next/dist/next-server/lib/utils'
import { useRouter } from 'next/dist/client/router'
import { handleFetch } from 'actions/userActions'
import { LocaleContext } from 'context/LocaleContext'

const wrapper = (WrappedPage) => {
  const WithNonAuth = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const user = useSelector(state => state.user)
    const { locale } = useContext(LocaleContext)
    let token

    if (process.browser) {
      token = localStorage.getItem('token')
    }

    useEffect(() => {
      if (token) {
        if (!user.auth) {
          dispatch(handleFetch(token))
        } else if (router.pathname.includes('/login')) {
          if (!user.stripe.customerId) {
            router.push('/[lang]/signup', `/${locale}/signup`)
          } else {
            router.push('/[lang]/dashboard/profile', `/${locale}/dashboard/profile`)
          }
        } else if (router.pathname.includes('/signup')) {
          if (user.stripe.customerId) {
            router.push('/[lang]/dashboard/profile', `/${locale}/dashboard/profile`)
          }
        }
      }
    }, [user.auth, token])

    return <WrappedPage />
  }

  // pretty display name for the debugger
  WithNonAuth.displayName = `withLang(${getDisplayName(WrappedPage)})`

  return WithNonAuth
}

export default wrapper
