import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Head from 'next/head'

import { DashboardLayout } from 'src/components/layouts'
import { ChangePwdForm, ProfileForm } from 'src/components/forms'
import useLocalization from 'src/lib/localization/useLocalization'
import handleMessage from 'src/lib/handleMessage'
import withAuth from 'src/hocs/withAuth'

import {
  handleChange as profileFormOnChange,
  handleSubmit as profileFormOnSubmit
} from 'src/actions/profileFormActions'

import {
  handleChange as changePwdFormOnChange,
  handleSubmit as changePwdFormOnSubmit
} from 'src/actions/changePwdFormActions'

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

export default withAuth(Profile)
