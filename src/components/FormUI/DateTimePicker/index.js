import { TextField } from '@mui/material'
import { useField } from 'formik'

const DateTimePicker = ({ name, ...otherProps }) => {
  const [field, meta] = useField(name)

  const configDateTimePicker = {
    ...field,
    ...otherProps,
    fullWidth: true,
    variant: 'outlined',
    type: 'date',
    InputLabelProps: {
      shrink: true,
    },
  }

  if (meta && meta.touched && meta.error) {
    configDateTimePicker.error = true
    configDateTimePicker.helperText = meta.error
  }

  return <TextField {...configDateTimePicker} />
}

export default DateTimePicker
