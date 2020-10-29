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
  type = "description";
  loading = true;
  ngOnInit(): void {
    let type=null;
    let lastType="";
    setInterval(() => {
      lastType = type;
      type = this.route.snapshot.paramMap.get("type");
      if(type!==lastType){
        this.loading = true;
        setTimeout(()=>{
          this.loading=false;
        },300)
        this.projectsArray = [];
        if (type === 'all') {
          let allProjects = (projects as any).default;
          for (let item of allProjects) {
            if (item.framework !== 'vanilla-js') {
              this.projectsArray.push(item);
            }
          }
        } else {
          let allProjects = (projects as any).default;
          for (let item of allProjects) {
            if (item.framework === type) {
              this.projectsArray.push(item);
            }
          }
        }
      }
      

      console.log(this.projectsArray);
    }, 1000)

  }
  showProject(project) {
    this.currentProject = project;
  }
  setType(val) {
    this.type = val;
  }
}
