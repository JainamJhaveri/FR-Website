/**
 * Created by jainu on 26/1/17.
 */

export class GeneralResponse {
  /**
   * model for general response of any type that is received after API calls
   * @param response
   * @param success
   */
  constructor(public response: any,
              public success: string) {
  }
}

export class ErrorResponse {
  /**
   * model for error response of any type that is received after API calls
   * @param generalErrorMessage
   */
  constructor(public generalErrorMessage: any) {
  }

}

export function loadAnErrorOccuredDialog(): void {
  alert("an error occured");
}
