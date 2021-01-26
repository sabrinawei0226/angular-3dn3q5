import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-btn-login",
  templateUrl: "./btn-login.component.html",
  styleUrls: ["./btn-login.component.css"]
})
export class BtnLoginComponent implements OnInit {
  login() {
    alert("確定要登入?");
  }
  
  constructor() {}

  ngOnInit() {}
}
