import { Button } from '@mui/material'
import { useFormikContext } from 'formik'

const ButtondWrapper = ({ children, ...otherProps }) => {
  const { submitForm } = useFormikContext()

  const configButton = {
    ...otherProps,
    fullWidth: true,
    variant: 'contained',
    color: 'primary',
    onClick: () => submitForm(),
  }

  return <Button {...configButton}>{children}</Button>
}

export default ButtondWrapper
