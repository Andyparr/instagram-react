import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'

import { RegisterView } from './ui/RegisterView'
import { RegisterController } from './RegisterController'

export class RegisterConnector extends React.PureComponent<
  RouteComponentProps<{}>
> {
  onFinish = () => {
    this.props.history.push('/m/confirm-email', {
      message: 'check your email to confirm your account'
    })
  }

  render() {
    return (
      <RegisterController>
        {({ register }) => (
          <RegisterView
            onFinish={this.onFinish}
            submit={async values => {
              await register({
                variables: {
                  input: values
                }
              })
            }}
          />
        )}
      </RegisterController>
    )
  }
}
