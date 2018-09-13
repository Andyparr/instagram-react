/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: RegisterMutation
// ====================================================

export interface RegisterMutation_register {
  path: string | null;
  ok: string;
  message: string;
}

export interface RegisterMutation {
  register: RegisterMutation_register[];
}

export interface RegisterMutationVariables {
  input: RegisterInput;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export interface RegisterInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  username: string;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
