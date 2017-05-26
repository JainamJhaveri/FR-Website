import {Component, OnInit} from "@angular/core";
import {UserRegister} from "../_models/user-auth";
import {Validations} from "../_models/validations";
import {AuthService} from "../_services/auth.service";

@Component({
  selector: 'login-register-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  newUser = new UserRegister('', '', '', '', '');   // StudentRegister object for passing in registerStudent() service
  registerSubmitted = false;    // boolean var for displaying loading.gif
  errorMessage = '';
  inputPassword2: string;       // for re-enter password field one-way data binding

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  registerUser(): void {

    this.registerSubmitted = true;

    if (!Validations.validateFullName(this.newUser.firstName)) {
      this.displayErrorMessage(Validations.MESSAGE_FULLNAME);
      return;
    } else if (!Validations.validateUsername(this.newUser.userName)) {
      this.displayErrorMessage(Validations.MESSAGE_USERNAME);
      return;
    } else if (!Validations.validateEmail(this.newUser.emailAddress)) {
      this.displayErrorMessage(Validations.MESSAGE_EMAIL);
      return;
    } else if (!Validations.validatePassword(this.newUser.password)) {
      this.displayErrorMessage(Validations.MESSAGE_PASSWORD);
      return;
    } else if (!Validations.matchPasswords(this.inputPassword2, this.newUser.password)) {
      this.displayErrorMessage(Validations.MESSAGE_MATCH_PASSWORD);
      return;
    } else if (!Validations.validateMobileNumber(this.newUser.mobileNumber)) {
      this.displayErrorMessage(Validations.MESSAGE_MOBILE_NUMBER);
      return;
    }


    this.authService.registerUser(this.newUser).subscribe(
      result => {
        if (result["success"] === "false") {
          console.log(result);
          this.displayErrorMessage(result["message"]);
        }
        else {
          console.log(result);
          this.registerSubmitted = false;
          this.clearAllFields();
          alert("user " + this.newUser.userName + " successfully created");
        }

      }
    );

  }

  private displayErrorMessage(message: string): void {
    console.log(message);
    this.registerSubmitted = false;
    this.errorMessage = message;
  }

  clearErrorMessage(): void {
    this.errorMessage = '';
  }


  private clearAllFields() {
    this.newUser.firstName = '';
    this.newUser.emailAddress = '';
    this.newUser.mobileNumber = '';
    this.newUser.userName = '';
    this.newUser.password = '';
    this.inputPassword2 = '';
  }

}
