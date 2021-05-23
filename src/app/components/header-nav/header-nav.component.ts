import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";
import { Router } from "@angular/router";
import {supporedLanguages} from "../../app.constants";
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: "app-header-nav",
  templateUrl: "./header-nav.component.html",
  styleUrls: ["./header-nav.component.scss"],
})
export class HeaderNavComponent implements OnInit {
  @Input() columnsToDisplay;
  @Input() stateNameToDisplay;
  @Input() showStateGraph;
  @Input() displayBackButton;
  @Input() backToUrl;
  @Input() isState;
  languageArray=supporedLanguages;

  ngOnInit() {
    //const browserLang = this.translateService.getBrowserLang();
    // if(supporedLanguages.indexOf(browserLang) > -1){
    //   this.translateService.setDefaultLang(browserLang);
    // } else {
      this.translateService.setDefaultLang('en');
    // }
  }
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private route: Router,
    private translateService: TranslateService
  ) {}
  

  onClickBackButton() {
    this.route.navigate([this.backToUrl]);
  }

  onLanguageChange(language: string){
    this.translateService.use(language);
  }
}
