import { Component, OnInit } from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";
import { supporedLanguages } from "../../app.constants";
import { TranslateService } from "@ngx-translate/core";
@Component({
  selector: "app-about-covid",
  templateUrl: "./about-covid.component.html",
  styleUrls: ["./about-covid.component.scss"],
})
export class AboutCovidComponent implements OnInit {
  languageArray = supporedLanguages;
  ngOnInit(): void {
    this.translateService.setDefaultLang('en');
  }
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private translateService: TranslateService
  ) {}
  onLanguageChange(language: string) {
    this.translateService.use(language);
  }
}
