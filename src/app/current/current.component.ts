import { Component, OnInit } from '@angular/core';
import { ScenariosService } from '../scenarios.service';
import { Scenario } from '../models/scenario.model';
import { FirebaseListObservable } from 'angularfire2/database';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
// import { NgModule } from '@angular/core';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css'],
  providers: [ScenariosService]
})
export class CurrentComponent implements OnInit {
scenarioId: number;
scenarioToDisplay;

  constructor(
    private scenariosService: ScenariosService,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
   this.route.params.forEach((urlparameters) =>{
     this.scenarioId = parseInt(urlparameters['id']);
   })
 

  this.scenarioToDisplay = this.scenariosService.getScenarioById(this.scenarioId);
  }

  goToScenarioByTitle(choice) {
    let tempScenario = this.scenariosService.getScenarioByTitle(choice)
    console.log(this.scenariosService.getIdByTitle(choice))
  }
}
