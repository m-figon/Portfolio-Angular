import { Component, OnInit } from '@angular/core';
import * as projects from '../projects.json';
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  projectsArray = [];
  currentProject = null;
  ngOnInit(): void {

    let type = this.route.snapshot.paramMap.get("type");
    if (type === 'all') {
      this.projectsArray = (projects as any).default;
    } else {
      let allProjects = (projects as any).default;
      for (let item of allProjects) {
        if (item.framework === type) {
          this.projectsArray.push(item);
        }
      }
    }

    console.log(this.projectsArray);
  }
  showProject(project) {
    this.currentProject = project;
  }

}
