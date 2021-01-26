import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-title",
  templateUrl: "./title.component.html",
  styleUrls: ["./title.component.css"]
})
export class TitleComponent implements OnInit {
  //first_line: String[] = ["1", "2", "3"];
  //first_line: number[] = [1, 2, 3];
  //first_line: number = 111;
  first_line: String = "Angular HW";
  //first_line: Boolean = true;
  //first_line: [string, number] = ["444", 444];

  constructor() {
    console.log(typeof this.first_line);
  }
  ngOnInit() {}
}
