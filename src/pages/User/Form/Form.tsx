import React from 'react'
import { useFormContext } from 'react-hook-form'
import Input from '@/components/Input/Input'
import styles from './Form.module.scss'
import { useTranslation } from 'react-i18next'

type FormProps = {
  children?: React.ReactNode
  isCreate?: boolean
}

const Form = (props: FormProps) => {
  const { t } = useTranslation()
  const { children, isCreate = true } = props
  const methods = useFormContext()

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.item}>
          <Input
            id='name'
            name='name'
            placeholder={t('users.form.namePlaceholder')}
            label={t('users.form.name')}
            formRegister={methods.register('name', { required: isCreate })}
          />
        </div>
        <div className={styles.item}>
          <Input
            id='email'
            name='email'
            placeholder={t('users.form.emailPlaceholder')}
            label={t('users.form.email')}
            formRegister={methods.register('email', { required: isCreate })}
          />
        </div>
        <div className={styles.item}>
          <Input
            id='phone'
            name='phone'
            placeholder={t('users.form.phonePlaceholder')}
            label={t('users.form.phone')}
            formRegister={methods.register('phone', { required: isCreate })}
          />
        </div>
        <div className={styles.item}>
          <Input
            id='username'
            name='username'
            placeholder={t('users.form.usernamePlaceholder')}
            label={t('users.form.username')}
            formRegister={methods.register('username', { required: isCreate })}
          />
        </div>
        <div className={styles.item}>
          <Input
            id='website'
            name='website'
            placeholder={t('users.form.websitePlaceholder')}
            label={t('users.form.website')}
            formRegister={methods.register('website', { required: isCreate })}
          />
        </div>
      </div>
      {children}
    </>
  )
}

export default Form