import * as React from 'react'
import { FieldProps } from 'formik'
import {
  FormGroup,
  InputGroup,
  IInputGroupProps,
  IFormGroupProps,
  Intent
} from '@blueprintjs/core'

export const InputField: React.SFC<
  FieldProps<any> & IInputGroupProps & IFormGroupProps
> = ({
  label,
  labelFor,
  leftIcon,
  labelInfo,
  placeholder,
  rightElement,
  type,
  defaultValue,
  disabled,
  large,
  round,
  value,
  inline,
  field: { onChange, ...field },
  form: { touched, errors }
}) => {
  const errorMsg = touched[field.name] && errors[field.name]
  console.log(errorMsg)
  const valid = touched[field.name] && !errors[field.name]
  const intent = errorMsg ? Intent.DANGER : valid ? Intent.SUCCESS : Intent.NONE
  return (
    <FormGroup
      helperText={errorMsg}
      label={label}
      labelFor={labelFor}
      labelInfo={labelInfo}
      disabled={disabled}
      inline={inline}
      intent={intent}
    >
      <InputGroup
        id={labelFor}
        placeholder={placeholder}
        leftIcon={leftIcon}
        rightElement={rightElement}
        type={type}
        defaultValue={defaultValue}
        disabled={disabled}
        intent={intent}
        large={large}
        onChange={onChange}
        round={round}
        value={value}
        {...field}
      />
    </FormGroup>
  )
}
