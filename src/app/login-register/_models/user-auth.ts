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
              public firstName: string,) {
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

