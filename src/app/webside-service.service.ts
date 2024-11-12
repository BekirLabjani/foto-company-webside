import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebsideServiceService {

  constructor() { }

  navigationLink =
  [
    {
      "linkComponent" : "effe",
      "text" : "Contact ME"
    },
    {
      "linkComponent" : "",
      "text" : "Angebote"
    },
    {
      "linkComponent" : "",
      "text" : "dhfs"
    },
  ]
}
