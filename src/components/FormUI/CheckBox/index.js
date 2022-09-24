import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from '@mui/material'

import { useField, useFormikContext } from 'formik'

const CheckboxWrapper = ({ name, label, legend, ...otherProps }) => {
  const { setFieldValue } = useFormikContext()
  const [field, meta] = useField(name)

  const configCheckbox = {
    ...field,
    onChange: ({ target }) => setFieldValue(name, target.checked),
  }

  const configFormControl = {}
  if (meta && meta.touched && meta.error) {
    configFormControl.error = true
    // configCheckbox.heperText = meta.error
  }

  return (
    <FormControl {...configFormControl}>
      <FormLabel component='legend'>{legend}</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox {...configCheckbox} />}
          label={label}
        />
      </FormGroup>
    </FormControl>
  )
}

export default CheckboxWrapper
