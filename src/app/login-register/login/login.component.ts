import {Component, OnInit} from "@angular/core";
import {GeneralValidationParams, UserLogin, UserLoginFormErrors} from "../_models/user-auth";
import {regexValidator, Validations} from "../_models/validations";
import {AuthService} from "../_services/auth.service";
import {Router} from "@angular/router";
import {SharedService} from "../_services/shared.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'login-register-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../common.css']
})
export class LoginComponent implements OnInit {

  userLogin = new UserLogin('123', '123123');   // StudentLogin object for passing in loginStudent() service

  loginSubmitted = false;                       // boolean var for displaying loading.gif
  errorMessage = '';                            // var to display error message if the login fails
  successMessage = '';

  loginForm: FormGroup;
  formErrors: UserLoginFormErrors = new UserLoginFormErrors();

  constructor(private authService: AuthService, private router: Router, private sharedService: SharedService, private fb: FormBuilder) {
    this.buildForm();
  }

  // build reactive form with validations
  // reference: https://angular.io/guide/form-validation
  private buildForm(): void {

    this.loginForm = this.fb.group({
      userName: [this.userLogin.userName,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(20),
          regexValidator(Validations.REGEX_USERNAME)
        ]
      ],
      password: [this.userLogin.password,
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20),
          regexValidator(Validations.REGEX_PASSWORD)
        ]
      ]
    });

    this.loginForm.valueChanges
      .subscribe(data => this.onValueChanged());

    this.onValueChanged(); // (re)set validation messages now
  }


  ngOnInit() {
    this.getLoginDetailsFromRegisterForm();
  }

  private getLoginDetailsFromRegisterForm() {
    this.sharedService.loginDetails$.subscribe(userLogin => {
      console.log(userLogin);
      this.userLogin = userLogin;
    });
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


  onValueChanged(data?: any) {

    if (!this.loginForm) {
      return;
    }

    const form = this.loginForm;

    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const messages = validationMessages[field];

        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
          break;
        }

      }
    }

  }


}

const validationMessages: UserLoginFormErrors = new UserLoginFormErrors(
  new GeneralValidationParams(
    'Username is required.',
    'Username must be at least 2 characters long.',
    'Username cannot be more than 20 characters long.',
    'No spaces are allowed in username'),
  new GeneralValidationParams(
    'Password is required.',
    'Password must be at least 6 characters long.',
    'Password cannot be more than 20 characters long.',
    'Password should contain only alphabets, letters or underscore'));

