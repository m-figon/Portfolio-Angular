import { Component, OnInit } from '@angular/core';
import * as projects from '../projects.json';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }
  projectsArray = [];
  currentProject = null;
  ngOnInit(): void {
    this.projectsArray= (projects as any).default;
    console.log(this.projectsArray);
  }
  showProject(project){
    this.currentProject=project;
  }

}
