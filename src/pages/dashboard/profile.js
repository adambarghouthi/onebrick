import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { compose } from 'redux'
import Head from 'next/head'
import { DashboardLayout } from 'components/layouts'
import { ChangePwdForm, ProfileForm } from 'components/forms'
import useLocalization from 'lib/localization/useLocalization'
import handleMessage from 'lib/handleMessage'
import withAuth from 'hocs/withAuth'

import {
  handleChange as profileFormOnChange,
  handleSubmit as profileFormOnSubmit
} from 'actions/profileFormActions'

import {
  handleChange as changePwdFormOnChange,
  handleSubmit as changePwdFormOnSubmit
} from 'actions/changePwdFormActions'

const Profile = () => {
  const dispatch = useDispatch()
  const profileForm = useSelector(state => state.profileForm)
  const changePwdForm = useSelector(state => state.changePwdForm)
  const user = useSelector(state => state.user)

  const { t } = useLocalization()

  // populate profileForm once
  useEffect(() => {
    dispatch(profileFormOnChange(null, {
      ...profileForm,
      email: user.email
    }))
  }, [user.email])

  // track profileForm success & error
  useEffect(() => {
    const { success, error } = profileForm
    handleMessage(success, error, t)
  }, [profileForm.success, profileForm.error])

  // track changePwdForm success & error
  useEffect(() => {
    const { success, error } = changePwdForm
    handleMessage(success, error, t)
  }, [changePwdForm.success, changePwdForm.error])

  return (
    <>
      <Head>
        <title>{ t('profile_hd_title') }</title>
      </Head>
      <DashboardLayout>
        <ProfileForm
          onChange={(a, b) => dispatch(profileFormOnChange(a, b))}
          onSubmit={form => dispatch(profileFormOnSubmit(form))}
          data={profileForm}
        />
        <br />
        <ChangePwdForm
          onChange={(a, b) => dispatch(changePwdFormOnChange(a, b))}
          onSubmit={form => dispatch(changePwdFormOnSubmit(form))}
          data={changePwdForm}
        />
      </DashboardLayout>
    </>
  )
}

export default compose(withLocale, withAuth)(Profile)
