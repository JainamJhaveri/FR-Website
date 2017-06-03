import {Component, OnInit} from "@angular/core";
import {UserLogin} from "../_models/user-auth";
import {Validations} from "../_models/validations";
import {AuthService} from "../_services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'login-register-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../common.css']
})
export class LoginComponent implements OnInit {

  userLogin = new UserLogin('', '');   // StudentLogin object for passing in loginStudent() service
  loginSubmitted = false;                       // boolean var for displaying loading.gif
  errorMessage = '';                            // var to display error message if the login fails
  successMessage = '';

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  loginStudent() {
    this.loginSubmitted = true;

    if (!Validations.validateUsername(this.userLogin.userName)) {
      this.displayErrorMessage(Validations.MESSAGE_USERNAME);
      return;
    } else if (!Validations.validatePassword(this.userLogin.password)) {
      this.displayErrorMessage(Validations.MESSAGE_PASSWORD);
      return;
    }

    this.authService.loginUser(this.userLogin).subscribe(
      result => {
        if (result["success"] === "false") {
          this.displayErrorMessage(result["response"]);
          this.loginSubmitted = false;
        }
        else {
          console.log(result);
          this.router.navigate(['home']);
        }
      }
    );

  }

  /**
   * clear error message variable
   */
  clearErrorMessage() {
    this.errorMessage = '';
  }

  private displayErrorMessage(message: string) {
    console.log(message);
    this.loginSubmitted = false;
    this.errorMessage = message;
  }


}
