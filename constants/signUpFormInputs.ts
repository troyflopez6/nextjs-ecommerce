import { TSignUpFormInputs } from '@/types/signUpFormInputs'

export const signUpFormInputs: TSignUpFormInputs[] = [
  {
    labelProps: {
      htmlFor: 'name'
    },
    inputProps: {
      id:'name',
      name: 'name',
      type: 'text',
      autoComplete: 'name'
    },
    label: 'Name',
    id: 'name'
  },
  {
    labelProps: {
      htmlFor: 'email'
    },
    inputProps: {
      id:'email',
      name:'email',
      type:'text',
      autoComplete:'email',
    },
    label: 'Email',
    id: 'email'
  },
  {
    labelProps: {
      htmlFor: 'password'
    },
    inputProps: {
      id:'password',
      name:'password',
      type:'password',
      autoComplete:'password',
    },
    label: 'Password',
    id:'password'
  },
  {
    labelProps: {
      htmlFor: 'confirmPassword'
    },
    inputProps: {
      id:'confirmPassword',
      name:'confirmPassword',
      type:'password',
    },
    label: 'Confirm Password',
    id:'confirmPassword'
  },
]