import { NgFor } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-projects',
  imports: [NgFor],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit{

  private readonly _projects = inject(ServiceService);

  data: any[] = [];

  ngOnInit(): void {
    this._projects.getProjects().subscribe({
      next: (response) => {
        this.data = response.projects;
        
      },
      error: (error) => {
        console.error(error);
    }});
  }
}
