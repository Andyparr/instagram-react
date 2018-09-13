import * as yup from 'yup'

export const emailNotLongEnough = 'email must be at least 3 characters'
export const passwordNotLongEnough = 'password must be at least 3 characters'
export const invalidEmail = 'email must be a valid email'

export const invalidLogin = 'invalid login'
export const confirmEmailError = 'please confirm your email'
export const forgotPasswordLockedError = 'account is locked'

export const registerPasswordValidation = yup
  .string()
  .min(3, passwordNotLongEnough)
  .max(255)
  .required()

export const validUserSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(1)
    .max(255)
    .required('First Name is a required field'),
  lastName: yup
    .string()
    .min(1)
    .max(255)
    .required('Last Name is a required field'),
  username: yup
    .string()
    .min(3)
    .max(255)
    .required('Username is a required field'),
  email: yup
    .string()
    .min(3, emailNotLongEnough)
    .max(255)
    .email(invalidEmail)
    .required('Email is a required field'),
  password: yup
    .string()
    .min(3, passwordNotLongEnough)
    .max(255)
    .required('Password is a required field')
})

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .min(3, invalidLogin)
    .max(255, invalidLogin)
    .email(invalidLogin)
    .required(),
  password: yup
    .string()
    .min(3, invalidLogin)
    .max(255, invalidLogin)
    .required()
})

export const changePasswordSchema = yup.object().shape({
  newPassword: registerPasswordValidation
})
