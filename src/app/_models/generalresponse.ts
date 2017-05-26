/**
 * Created by jainu on 26/1/17.
 */

export class GeneralResponse {
  /**
   * model for general response of any type that is received after API calls
   * @param response
   * @param success
   */
  constructor(
    public response : any,
    public success : string
  ){}
}
