import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-account",
  templateUrl: "./account.component.html",
  styleUrls: ["./account.component.css"]
})
export class AccountComponent implements OnInit {
  account_placeholderText: String = "請輸入帳號";
  password_placeholderText: String = "請輸入密碼";
  account: string = "";
  password: string = "";
  password1: string = "";
  show_password() {
    this.password1 = this.password;
  }
  constructor() {}

  ngOnInit() {}
}
