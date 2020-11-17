import { Injectable } from "@angular/core";
import * as domtoimage from "dom-to-image";

@Injectable({
  providedIn: "root",
})
export class PrintService {
  constructor() {}

  print(componentName) {
    var node = document.getElementById(componentName);

    domtoimage
      .toPng(node)
      .then(function (dataUrl) {
        var popup = window.open();
        var img = new Image();
        img.src = dataUrl;
        popup.document.body.appendChild(img);
        popup.document.close();
        popup.focus();
        popup.print();
        popup.close();
      })
      .catch(function (error) {
        console.error("oops, something went wrong!", error);
      });
  }
}
