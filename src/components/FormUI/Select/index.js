import { TextField, MenuItem } from '@mui/material'
import { useField, useFormikContext } from 'formik'

const SelectdWrapper = ({ name, options, ...otherProps }) => {
  const { setFieldValue } = useFormikContext()

  const [field, meta] = useField(name)

  const configSelect = {
    ...field,
    ...otherProps,
    select: true,
    fullWidth: true,
    variant: 'outlined',
    onChange: (event) => {
      const { value } = event.target
      setFieldValue(name, value)
    },
  }

  if (meta && meta.touched && meta.error) {
    configSelect.error = true
    configSelect.helperText = meta.error
  }

  return (
    <TextField {...configSelect}>
      {Object.keys(options).map((item, idx) => {
        return (
          <MenuItem value={item} key={idx}>
            {options[item]}
          </MenuItem>
        )
      })}
    </TextField>
  )
}

export default SelectdWrapper
