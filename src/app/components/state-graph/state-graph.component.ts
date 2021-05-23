import { Component, OnInit, AfterViewChecked,ChangeDetectorRef } from "@angular/core";
import { CovidApiService } from "../../services/covid-api.service";
import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";
import { ActivatedRoute } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
@Component({
  selector: "app-state-graph",
  templateUrl: "./state-graph.component.html",
  styleUrls: ["./state-graph.component.scss"],
})
export class StateGraphComponent implements OnInit,AfterViewChecked {
  chart = [];
  constructor(
    private _covidAPI: CovidApiService,
    private router: ActivatedRoute,
    private cdRef: ChangeDetectorRef,
    private _translate: TranslateService
  ) {}

  width = (window.innerWidth >1279) ? window.innerWidth *0.30 :window.innerWidth*0.8;
  height = (window.innerWidth >1279) ? window.innerHeight *0.4 :window.innerHeight*0.35;

  districtTitle = "COVID-19 information in";
  districtType = "BarChart";
  districtData = [];
  districtGraphOptions = {};

  districtActiveCases = 0;
  districtName = "";
  districtConfirmed = 0;
  districtRecovered = 0;
  districtDeceased = 0;
  districtObject = {};
  stateName = "";

  myControl = new FormControl();
  stateoptions: string[] = [];
  filteredOptions: Observable<string[]>;
  selectedDistrict = {key:"",value:""};

  isGraphError = false;
  ngOnInit(): void {
    this.stateName = this.router.snapshot.params.name;

    this._covidAPI.getStates().subscribe(
      (res) => {
        let districtsObj = res[this.stateName]["districtData"];
        this.districtObject = districtsObj;
        this.stateoptions = Object.keys(districtsObj);
        console.log(this.stateoptions)
        this.districtData = [
          [this.returnTranslatedString("graph.activeCase"), districtsObj[this.stateoptions[0]].active],
          [this.returnTranslatedString("graph.confirmedCase"), districtsObj[this.stateoptions[0]].confirmed],
          [ this.returnTranslatedString("graph.recoveredCase"), districtsObj[this.stateoptions[0]].recovered],
          [this.returnTranslatedString("graph.deceasedCase"), districtsObj[this.stateoptions[0]].deceased],
        ];
        this.districtTitle = `stateColumn.${this.stateName}.${this.stateoptions[0]}` ;
        this.selectedDistrict = { key:this.stateoptions[0], value: this.returnTranslatedString(`stateColumn.${this.stateName}.${this.stateoptions[0]}`) };
      },
      (err) => {
        this.isGraphError = true;
      }
    );

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(""),
      map((value) => this._filter(value))
    );
  }

  ngAfterViewChecked(): void {
    this.cdRef.detectChanges();
    this.districtData && this._translate.onLangChange.subscribe(()=>{
      this.selectedDistrict.value = this.returnTranslatedString(`stateColumn.${this.stateName}.${this.selectedDistrict.key}`)
      this.districtData = [
        [this.returnTranslatedString("graph.activeCase"), this.districtData[0][1]],
        [
          this.returnTranslatedString("graph.confirmedCase"),
          this.districtData[1][1],
        ],
        [
          this.returnTranslatedString("graph.recoveredCase"),
          this.districtData[2][1],
        ],
        [
          this.returnTranslatedString("graph.deceasedCase"),
          this.districtData[3][1],
        ],
      ];
    })
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.stateoptions.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

  onStateChange(event) {
    this.districtData = [
      [this.returnTranslatedString("graph.activeCase"), this.districtObject[event.option.value].active],
      [this.returnTranslatedString("graph.confirmedCase"), this.districtObject[event.option.value].confirmed],
      [this.returnTranslatedString("graph.recoveredCase"), this.districtObject[event.option.value].recovered],
      [this.returnTranslatedString("graph.deceasedCase"), this.districtObject[event.option.value].deceased],
    ];
    this.selectedDistrict.key = event.option.value;
    this.selectedDistrict.value = this.returnTranslatedString( `stateColumn.${this.stateName}.${event.option.value}`);
    this.districtTitle = `stateColumn.${this.stateName}.${event.option.value}`;
  }

  returnTranslatedString(key) {
    let convertedValue;
    this._translate.get(key).subscribe((str) => (convertedValue = str));
    return convertedValue;
  }
}
