import React, { useEffect } from 'react' 
import { useDispatch, useSelector } from 'react-redux'
import { Spin } from 'antd'
import { getDisplayName } from 'next/dist/next-server/lib/utils'
import { useRouter } from 'next/dist/client/router'
import { handleFetch } from 'src/actions/userActions'

const wrapper = (WrappedPage) => {
  const WithNonAuth = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const user = useSelector(state => state.user)

    const { locale } = useRouter()

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
            router.push('/signup')
          } else {
            router.push('/dashboard/profile')
          }
        } else if (router.pathname.includes('/signup')) {
          if (user.stripe.customerId) {
            router.push('/dashboard/profile')
          }
        }
      }
    }, [user.auth])

    return (
      <>
        {
          user.loading
            ? <div className="loader">
                <Spin />
              </div>
            : null
        }
        <WrappedPage />
      </>
    )
  }

  // pretty display name for the debugger
  WithNonAuth.displayName = `withLang(${getDisplayName(WrappedPage)})`

  return WithNonAuth
}

export default wrapper
