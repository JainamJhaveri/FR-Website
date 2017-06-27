export class EventMaster {

  /**
   * model for displaying master view information of events
   *
   * @param eventId
   * @param eventName
   * @param eventDescription
   * @param eventDate
   * @param eventImageUrl
   * @param eventCreation
   * @param eventEdition
   */
  constructor(public eventId: string,
              public eventName: string,
              public eventDescription: string,
              public eventDate: string,
              public eventImageUrl: string,
              public eventCreation: EventCreatorEditor,
              public eventEdition: EventCreatorEditor) {
  }

}

export class EventCreatorEditor {

  /**
   * model for displaying event editor/creator name and storing last time stamp of update/create
   * @param by
   * @param timeStamp
   */
  constructor(public by: string,
              public timeStamp: Date) {

  }
}
