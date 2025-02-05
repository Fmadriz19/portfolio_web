import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './feacture/hero/hero.component';
import { ProjectsComponent } from './feacture/projects/projects.component';
import { AboutComponent } from './feacture/about/about.component';
import { NavbarComponent } from './feacture/navbar/navbar.component';
import { TechnologiesComponent } from './feacture/technologies/technologies.component';
import { ExperiencesComponent } from './feacture/experiences/experiences.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeroComponent, ProjectsComponent, AboutComponent, NavbarComponent, TechnologiesComponent, ExperiencesComponent  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'client';

  showButton = false;

  constructor() {
    window.addEventListener('scroll', () => {
      this.showButton = window.scrollY > 100;
    })
  }

  goTop() { 
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
