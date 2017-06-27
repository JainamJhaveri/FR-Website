import {Component, OnInit} from "@angular/core";
// services
import {UploadTabService} from "../_services/upload-tab.service";
// models
import {EventMaster} from "../_models/event";
import {loadAnErrorOccuredDialog} from "../../_models/generalresponse";


@Component({
  selector: 'home-upload-pics',
  templateUrl: './upload-pics.component.html',
  styleUrls: ['./upload-pics.component.css']
})
export class UploadPicsComponent implements OnInit {

  selectedEvent: EventMaster;
  events: EventMaster[] = [];

  constructor(private uploadTabService: UploadTabService) {
  }

  ngOnInit() {
    this.uploadTabService.getAllEvents().subscribe(res => {
      console.log(res);

      if (res.generalErrorMessage) {
        loadAnErrorOccuredDialog();
        return;
      }

      this.events = res.response;
      this.selectedEvent = this.events[0];
      console.log(this.events);
    })
  }

}
