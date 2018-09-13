import gql from 'graphql-tag'
import * as React from 'react'
import { Mutation, MutationFn } from 'react-apollo'

import {
  RegisterMutation,
  RegisterMutationVariables
} from '../../../schemaTypes'

const registerMutation = gql`
  mutation RegisterMutation($input: RegisterInput!) {
    register(input: $input) {
      path
      ok
      message
    }
  }
`

export interface WithRegister {
  register: MutationFn<RegisterMutation, RegisterMutationVariables>
}

interface Props {
  children: (data: WithRegister) => JSX.Element | null
}

export class RegisterController extends React.PureComponent<Props> {
  render() {
    const { children } = this.props

    return (
      <Mutation<RegisterMutation, RegisterMutationVariables>
        mutation={registerMutation}
      >
        {mutate => {
          return children({
            register: mutate
          })
        }}
      </Mutation>
    )
  }
}
