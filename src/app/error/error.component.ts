import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material";

@Component({
  templateUrl: "./error.component.html",
})
export class ErrorComponent implements OnInit {
  message = "An unknown error occured!";
  constructor(@Inject(MAT_DIALOG_DATA) public data: { message: string }) {}

  ngOnInit() {}
}
