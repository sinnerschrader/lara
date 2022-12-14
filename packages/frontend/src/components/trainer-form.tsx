import React from 'react'
import { useForm } from 'react-hook-form'
import { TrainerFormLayout, Input, Text, TextProps, DefaultTheme } from '@lara/components'

import { Trainer } from '../graphql'
import strings from '../locales/localization'
import { PrimaryButton, SecondaryButton } from './button'
import { useValidationHelper } from '../helper/validation-helper'

interface EditTrainerFormProps {
  trainer?: Pick<Trainer, 'firstName' | 'lastName' | 'email'>
  submit: (data: EditTrainerFormData) => Promise<void>
  cancel?: () => void
  blurSubmit: boolean
}

export interface EditTrainerFormData {
  firstName: string
  lastName: string
  email: string
}

const inputLabelProps: TextProps = {
  spacing: '1.2px',
  weight: 700,
  size: 'label',
  uppercase: true,
}

export const TrainerForm: React.FC<EditTrainerFormProps> = ({ trainer, submit, blurSubmit, cancel }) => {
  const { validateEmail } = useValidationHelper()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<EditTrainerFormData>()

  const onSubmit = handleSubmit((formdata) => {
    setUpdating(true)

    submit(formdata).then(() => {
      setUpdating(false)
    })
  })

  const onCancel = () => {
    reset()

    if (cancel) {
      cancel()
    }
  }

  const [updating, setUpdating] = React.useState(false)

  const getFontColor = (hasError: unknown): keyof DefaultTheme => (hasError ? 'errorRed' : 'darkFont')

  return (
    <form onSubmit={onSubmit}>
      <TrainerFormLayout
        firstNameInput={
          <>
            <Text color={getFontColor(errors.firstName)} {...inputLabelProps}>
              {strings.settings.firstname}
            </Text>
            <Input
              {...register('firstName', {
                required: strings.validation.required,
              })}
              defaultValue={trainer?.firstName}
              disabled={updating}
              error={Boolean(errors.firstName)}
              onBlur={blurSubmit ? onSubmit : undefined}
            />
          </>
        }
        lastNameInput={
          <>
            <Text color={getFontColor(errors.lastName)} {...inputLabelProps}>
              {strings.settings.lastname}
            </Text>
            <Input
              {...register('lastName', {
                required: strings.validation.required,
              })}
              defaultValue={trainer?.lastName}
              disabled={updating}
              error={Boolean(errors.lastName)}
              onBlur={blurSubmit ? onSubmit : undefined}
            />
          </>
        }
        emailInput={
          <>
            <Text color={getFontColor(errors.email)} {...inputLabelProps}>
              {strings.settings.email}
            </Text>
            <Input
              type="email"
              {...register('email', {
                required: true,
                validate: validateEmail,
              })}
              defaultValue={trainer?.email}
              disabled={updating}
              error={Boolean(errors.email)}
              onBlur={blurSubmit ? onSubmit : undefined}
            />
          </>
        }
        buttonControls={
          !blurSubmit ? (
            <>
              <SecondaryButton type="button" onClick={onCancel}>
                {strings.cancel}
              </SecondaryButton>
              <PrimaryButton type="submit" onClick={onSubmit}>
                {strings.continue}
              </PrimaryButton>
            </>
          ) : undefined
        }
      />
    </form>
  )
}
