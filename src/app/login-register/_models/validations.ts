import {AbstractControl, ValidatorFn} from "@angular/forms";
export class Validations {

  public static MESSAGE_FULLNAME = "Full Name field must have length between 3 and 30";
  public static MESSAGE_EMAIL = "Please enter a valid email address";
  public static MESSAGE_PASSWORD = "Your password should contain only alphabets, letters or underscore";
  public static MESSAGE_MATCH_PASSWORD = "Passwords do not match !";
  public static MESSAGE_USERNAME = "Your username should contain only alphabets, letters or underscore";
  public static MESSAGE_MOBILE_NUMBER = "Please enter a valid mobile number of 10 digits";

  public static REGEX_USERNAME = /^[\w]{2,20}$/;
  public static REGEX_PASSWORD = /^[\w]{6,20}$/;
  public static REGEX_EMAIL = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  public static REGEX_MOBILE_NUMBER = /^[789]\d{9}$/;
  public static REGEX_FULLNAME = /^[\w ]{3,30}$/;

  /**
   * validate email according to regex
   * if email regex is valid
   *    return true
   * else
   *    return false
   * @param email
   * @returns {boolean}
   */
  public static validateEmail(email: string) {
    let emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
  }

  /**
   * validate password according to regex
   * if password regex is valid
   *    return true
   * else
   *    return false
   */
  public static validatePassword(password: string) {
    let passwordRegex = /^[\w]{6,20}$/;
    return passwordRegex.test(password);
  }

  /**
   * match password strings
   * if passwords match
   *    return true
   * else
   *    return false
   * @param p1
   * @param p2
   * @returns {boolean}
   */
  public static matchPasswords(p1: string, p2: string) {
    return p1 === p2;
  }

  /**
   * validate username according to regex
   * if username regex is valid
   *    return true
   * else
   *    return false
   * @param username
   * @returns {boolean}
   */
  public static validateUsername(username: string) {
    let usernameRegex = /^[\w]{2,20}$/;
    return usernameRegex.test(username);
  }

  /**
   * validate mobile number according to regex
   *
   * @param mobilenumber
   * @returns {boolean}
   */
  public static validateMobileNumber(mobilenumber: string) {
    let mobilenumberRegex = /^[789]\d{9}$/;
    return mobilenumberRegex.test(mobilenumber);
  }

  /**
   * validate full name according to regex
   *
   * @param fullName
   * @returns {boolean}
   */
  public static validateFullName(fullName: string) {
    let fullNameRegex = /^[\w ]{3,30}$/;
    return fullNameRegex.test(fullName);
  }


}


/**
 *  validates whether passed regex is correct or not for a ControlGroup
 *
 *  if control group matches the value of regex
 *      return null
 *  return {'otherMessage': ..}}
 *
 * @param nameRe
 * @returns {(control:AbstractControl)=>{[p: string]: any}}
 */
export function regexValidator(nameRe: RegExp): ValidatorFn {

  return (control: AbstractControl): { [key: string]: any } => {
    const name = control.value;
    const no = nameRe.test(name);
    return no ? null : {'otherMessage': {name}};
  };

}
