export class UserRegister {
  /**
   * @param userName
   * @param emailAddress
   * @param password
   * @param mobileNumber
   * @param firstName
   */
  constructor(public userName: string,
              public password: string,
              public emailAddress: string,
              public mobileNumber: string,
              public firstName: string) {
  }

}

export class UserLogin {
  /**
   * @param userName
   * @param password
   */
  constructor(public userName: string,
              public password: string,) {
  }

}

export class UserLoginFormErrors {

  /** for displaying error messages in the login form
   * @param userName
   * @param password
   */
  constructor(public userName?: any,
              public password?: any) {
  }

}


export class GeneralValidationParams {

  /**
   *
   * @param required
   * @param minlength
   * @param maxlength
   * @param otherMessage
   */
  constructor(public required?: string,
              public minlength?: string,
              public maxlength?: string,
              public otherMessage?: any) {

  }

}
