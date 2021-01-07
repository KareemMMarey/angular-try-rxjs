import { Component, OnInit, VERSION } from "@angular/core";
import { of, from } from "rxjs";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    of(2, 4, 6, 8, 10).subscribe(console.log);
    from([12, 54, 212, 145, 77]).subscribe(
      item => console.log(`resulting from item... ${item}`),
      error => console.log(`resulting error... ${error}`),
      () => console.log(`Complete`)
    );

    of("Kareem", "Ageez", "Hany").subscribe(
      person => console.log(`The person name is ... ${person}`),
      err => console.error(`An error happened ${err}`),
      () => console.log("No other Persons to display names, Go to home")
    );
  }
  name = "Angular " + VERSION.major;
}
