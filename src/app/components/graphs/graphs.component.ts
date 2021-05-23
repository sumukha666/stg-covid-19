import {
  Component,
  OnInit,
  ChangeDetectorRef,
  AfterViewChecked,
} from "@angular/core";
import { CovidApiService } from "../../services/covid-api.service";
import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";
import { TranslateService } from "@ngx-translate/core";
@Component({
  selector: "app-graphs",
  templateUrl: "./graphs.component.html",
  styleUrls: ["./graphs.component.scss"],
})
export class GraphsComponent implements OnInit, AfterViewChecked {
  chart = [];
  constructor(
    private _covidAPI: CovidApiService,
    private cdRef: ChangeDetectorRef,
    private _translate: TranslateService
  ) {}

  title = "graph.confirmedCase";
  type = "LineChart";
  recoveredData = [];
  confirmData = [];
  deceasedData = [];
  data = [];
  options = {
    colors: ["#e0440e", "#e6693e", "#ec8f6e", "#f3b49f", "#f6c7b6"],
    is3D: true,
    hAxis: {
      title: "Date",
    },
    // vAxis: {
    //   title: 'Number of COVID-19 confirmed cases'
    // },
    pointSize: 5,
    crosshair: {
      color: "#000000",
      trigger: "selection",
    },
  };
  width =
    window.innerWidth > 1279
      ? window.innerWidth * 0.3
      : window.innerWidth * 0.8;
  height =
    window.innerWidth > 1279
      ? window.innerHeight * 0.4
      : window.innerHeight * 0.35;

  stateTitle = "COVID-19 information in";
  stateType = "BarChart";
  stateData = [];
  stateGraphOptions = {};

  stateActiveCases = 0;
  stateName = "";
  stateConfirmed = 0;
  stateRecovered = 0;
  stateDeceased = 0;
  stateObject = {};
  selectedStateOption = {key:"Karnataka",value:"Karnataka"};

  myControl = new FormControl();
  stateoptions: string[] = [];
  filteredOptions: Observable<string[]>;

  isGraphError = false;
  isStateGraphError = false;
  ngOnInit(): void {
    // this._translate.get("graph.confirmedCase").subscribe((str)=>this.title=str)
    this._covidAPI.getCasesByDate().subscribe(
      (res) => {
        res["cases_time_series"].forEach((element) => {
          this.confirmData.push([element["date"], +element["totalconfirmed"]]);
          this.data.push([element["date"], +element["totalconfirmed"]]);
          this.deceasedData.push([element["date"], +element["totaldeceased"]]);
          this.recoveredData.push([
            element["date"],
            +element["totalrecovered"],
          ]);
        });
        this.initilizeDailyGraphData(this.confirmData);
      },
      (err) => {
        this.isGraphError = true;
      }
    );

    this._covidAPI.getStates().subscribe(
      (res) => {
        Object.keys(res).forEach((key) => {
          if (key !== "State Unassigned") {
            this.stateName = key;
            Object.keys(res[key]).forEach((district) => {
              if (district === "districtData") {
                Object.keys(res[key][district]).forEach((city) => {
                  this.stateActiveCases =
                    this.stateActiveCases + res[key][district][city]["active"];
                  this.stateConfirmed =
                    this.stateConfirmed + res[key][district][city]["confirmed"];
                  this.stateRecovered =
                    this.stateRecovered + res[key][district][city]["recovered"];
                  this.stateDeceased =
                    this.stateDeceased + res[key][district][city]["deceased"];
                });
              }
            });
            this.stateTitle = "tableColumn.Karnataka";
            this.stateObject[this.stateName] = {
              active: this.stateActiveCases,
              recovered: this.stateRecovered,
              deceased: this.stateDeceased,
              confirmed: this.stateConfirmed,
            };
          }
        });
        this.stateData = [
          [
            this.returnTranslatedString("graph.activeCase"),
            this.stateObject["Karnataka"].active,
          ],
          [
            this.returnTranslatedString("graph.confirmedCase"),
            this.stateObject["Karnataka"].confirmed,
          ],
          [
            this.returnTranslatedString("graph.recoveredCase"),
            this.stateObject["Karnataka"].recovered,
          ],
          [
            this.returnTranslatedString("graph.deceasedCase"),
            this.stateObject["Karnataka"].deceased,
          ],
        ];
        //console.log(this.stateObject)
        this.selectedStateOption.value = this.returnTranslatedString("tableColumn."+this.selectedStateOption.key)
        this.stateoptions = Object.keys(this.stateObject);
      },
      (err) => {
        this.isStateGraphError = true;
      }
    );

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(""),
      map((value) => this._filter(value))
    );
  }

  ngAfterViewChecked(): void {
    this.cdRef.detectChanges();
    
    this.stateData && this._translate.onLangChange.subscribe(()=>{
      this.stateData = [
        [this.returnTranslatedString("graph.activeCase"), this.stateData[0][1]],
        [
          this.returnTranslatedString("graph.confirmedCase"),
          this.stateData[1][1],
        ],
        [
          this.returnTranslatedString("graph.recoveredCase"),
          this.stateData[2][1],
        ],
        [
          this.returnTranslatedString("graph.deceasedCase"),
          this.stateData[3][1],
        ],
      ];
      this.selectedStateOption.value = this.returnTranslatedString("tableColumn."+this.selectedStateOption.key)
    })
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.stateoptions.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

  onOptionSelect(event) {
    let words = event.split(" ");
    this.data = this[words[0]];
    this.title = `graph.${words[1]}`;
    //this._translate.get(`graph.${words[1]}`).subscribe((str)=>this.title=str)
    //this.title = `Number of COVID-19 ${words[1]} ${words[2]}`;
  }
  last15Days(event) {
    this.data = this.data.slice(this.data.length - 15, this.data.length);
    //this.title = this.title
    // this.title = this.title.includes(" in last 15 days")
    //   ? this.title
    //   : this.title + " in last 15 days";
  }
  initilizeDailyGraphData(data) {
    this.data = data;
  }

  onStateChange(event) {
    this.stateData = [
      [this.returnTranslatedString("graph.activeCase"), this.stateObject[event.option.value].active],
      [this.returnTranslatedString("graph.confirmedCase"), this.stateObject[event.option.value].confirmed],
      [this.returnTranslatedString("graph.recoveredCase"), this.stateObject[event.option.value].recovered],
      [this.returnTranslatedString("graph.deceasedCase"), this.stateObject[event.option.value].deceased],
    ];
    this.selectedStateOption = {key: event.option.value, value:this.returnTranslatedString("tableColumn." + event.option.value)};
    this.stateTitle ="tableColumn." + event.option.value;
  }

  returnTranslatedString(key) {
    let convertedValue;
    this._translate.get(key).subscribe((str) => (convertedValue = str));
    return convertedValue;
  }
}

// https://www.codeandweb.com/babeledit/tutorials/how-to-translate-your-angular-app-with-ngx-translate
