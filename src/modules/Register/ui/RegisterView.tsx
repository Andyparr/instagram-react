import { Field, Form, FormikProps, withFormik } from 'formik'
import * as React from 'react'
import { Link } from 'react-router-dom'

import { Button, Intent, Tooltip } from '@blueprintjs/core'

import { InputField } from '../../InputField'
import { validUserSchema } from '../../../yupSchemas/user'

interface FormValues {
  firstName: string
  lastName: string
  email: string
  password: string
  username: string
}

interface Props {
  onFinish: () => void
  submit: (values: FormValues) => Promise<void | null>
}

interface State {
  disabled: boolean
  large: boolean
  showPassword: boolean
}

class C extends React.PureComponent<FormikProps<FormValues> & Props, State> {
  state: State = {
    disabled: false,
    large: false,
    showPassword: false
  }
  render() {
    const { disabled, showPassword } = this.state

    const handleLockClick = () =>
      this.setState({ showPassword: !this.state.showPassword })

    // const handleDisabledChange = () =>
    //   this.setState({
    //     disabled: !this.state.disabled
    //   })

    // const handleLargeChange = () => this.setState({ large: !this.state.large })

    const lockButton = (
      <Tooltip
        content={`${showPassword ? 'Hide' : 'Show'} Password`}
        disabled={disabled}
      >
        <Button
          disabled={disabled}
          icon={showPassword ? 'unlock' : 'lock'}
          intent={Intent.WARNING}
          minimal={true}
          onClick={handleLockClick}
        />
      </Tooltip>
    )

    return (
      <Form style={{ display: 'flex', marginTop: 10 }}>
        <div style={{ width: 400, margin: 'auto' }}>
          {/* <Switch
            label="Disabled"
            onChange={handleDisabledChange}
            checked={disabled}
          />
          <Switch label="Large" onChange={handleLargeChange} checked={large} /> */}
          <Field
            name="firstName"
            leftIcon="person"
            placeholder="First Name"
            component={InputField}
          />
          <Field
            name="lastName"
            leftIcon="person"
            placeholder="Last Name"
            component={InputField}
          />
          <Field
            name="username"
            leftIcon="user"
            placeholder="Username"
            component={InputField}
          />
          <Field
            name="email"
            leftIcon="envelope"
            placeholder="Email"
            component={InputField}
          />
          <Field
            name="password"
            type={showPassword ? 'text' : 'password'}
            leftIcon="key"
            rightElement={lockButton}
            placeholder="Password"
            component={InputField}
          />
          <div style={{ margin: '0 0 15px' }}>
            <Link to="/forgot-password">Forgot password</Link>
          </div>
          <div style={{ margin: '0 0 15px' }}>
            <Button type="submit">Register</Button>
          </div>
          <div>
            Or <Link to="/login">login now!</Link>
          </div>
        </div>
      </Form>
    )
  }
}

export const RegisterView = withFormik<Props, FormValues>({
  validationSchema: validUserSchema,
  mapPropsToValues: () => ({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    username: ''
  }),
  handleSubmit: async (values, { props, setErrors }) => {
    const errors = await props.submit(values)
    if (errors) {
      setErrors(errors)
    } else {
      props.onFinish()
    }
  }
})(C)
