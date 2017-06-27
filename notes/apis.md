**UPLOAD PICS TAB**

* GET `/getAllEvents`  
    * populate dropdown of upload pics
* POST `/createEvent` 
    * params
        * eventName
        * eventDescription
        * eventDate
        * eventImageUrl
        * userId
    * After user has succesfully uploaded cover photo on s3, call this API
* POST `/addFilesForEvent`
    * params
        * videos[]: videoUrl, timeStamp 
        * images[]: imageUrl, timeStamp
        * userId
        * eventId
    * After user has successfully uploaded files for an event on s3, call this API

**ALL EVENTS**

* GET `/getAllEvents`
    * To populate cards of events using imageUrl, eventDate and eventName
* GET `/getEventDetails/:eventId`
    * To populate event data (images and videos) for selected event
    * To filter event data based on userId
