import React, { useEffect, useContext } from 'react' 
import { useDispatch, useSelector } from 'react-redux'
import { getDisplayName } from 'next/dist/next-server/lib/utils'
import { useRouter } from 'next/dist/client/router'
import { handleFetch } from 'actions/userActions'
import { LocaleContext } from 'context/LocaleContext'

const wrapper = (WrappedPage) => {
  const WithAuth = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const user = useSelector(state => state.user)
    const { locale } = useContext(LocaleContext)
    let token

    if (process.browser) {
      token = localStorage.getItem('token')
    }

    useEffect(() => {
      // if (token) {
      //   if (!user.auth) {
      //     dispatch(handleFetch(token))
      //   }  else if (!user.stripe.customerId) {
      //     router.push('/[lang]/signup', `/${locale}/signup`)
      //   }
      // } else {
      //   router.push('/[lang]/login', `/${locale}/login`)
      // }
    }, [user, token])

    return <WrappedPage />
  }

  // pretty display name for the debugger
  WithAuth.displayName = `withAuth(${getDisplayName(WrappedPage)})`

  return WithAuth
}

export default wrapper
