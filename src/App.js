import Header from './components/Header'
import { Container, Grid, Typography } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import TextField from './components/FormUI/Textfield'
import Select from './components/FormUI/Select'
import DateTime from './components/FormUI/DateTimePicker'
import Checkbox from './components/FormUI/CheckBox'
import Button from './components/FormUI/Button'

const countries = require('./countries.json')

const useStyles = makeStyles()((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(8),
  },
}))

const INItIAL_FORM_STATE = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  addressLine1: '',
  addressLine2: '',
  city: '',
  state: '',
  country: '',
  arrivealDate: '',
  departureDate: '',
  message: '',
  termsOfService: false,
}

const FORM_VALIDATION = Yup.object().shape({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  phone: Yup.number()
    .integer()
    .typeError('Please enter a valid phone number')
    .required('Required'),
  addressLine1: Yup.string().required('Required'),
  addressLine2: Yup.string(),
  city: Yup.string().required('Required'),
  state: Yup.string().required('Required'),
  country: Yup.string().required('Required'),
  arrivealDate: Yup.date().required('Required'),
  departureDate: Yup.date().required('Required'),
  message: Yup.string(),
  termsOfService: Yup.boolean()
    .oneOf([true], 'The terms and conditions must be accepted')
    .required('The terms and conditions must be accepted'),
})

const App = () => {
  const { classes, cx } = useStyles()

  return (
    <Grid container>
      <Grid item xs={12} position="fixed" width="100%">
        <Header />
      </Grid>

      <Grid item xs={12} marginTop={5}>
        <Container maxWidth="md">
          <div className={cx(classes.formWrapper)}>
            <Formik
              initialValues={{
                ...INItIAL_FORM_STATE,
              }}
              validationSchema={FORM_VALIDATION}
              onSubmit={(values) => console.log(values)}
            >
              <Form>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography>Your details</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField name="firstName" label={'First Name'} />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField name="lastName" label={'Last Name'} />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField name="email" label={'Email'} />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField name="phone" label={'Phone'} />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography>Address</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField name="addressLine1" label={'Address Line 1'} />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField name="addressLine2" label={'Address Line 2'} />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField name="city" label={'City'} />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField name="state" label={'State'} />
                  </Grid>
                  <Grid item xs={12}>
                    <Select
                      name="country"
                      label={'Country'}
                      options={countries}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography>Booking information</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <DateTime name="arrivealDate" label={'Arriveal Date'} />
                  </Grid>
                  <Grid item xs={6}>
                    <DateTime name="departureDate" label={'Departure Date'} />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      multiline={true}
                      rows={4}
                      name="message"
                      label={'Message'}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Checkbox
                      name="termsOfService"
                      legend="Terms Of Service"
                      label="i agree to Terms Of Service"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Button>SUBMIT INFORMATION</Button>
                  </Grid>
                </Grid>
              </Form>
            </Formik>
          </div>
        </Container>
      </Grid>
    </Grid>
  )
}

export default App
