import { Component, inject, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-experiences',
  imports: [NgFor],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.css'
})
export class ExperiencesComponent implements OnInit {

  private readonly _experiences = inject(ServiceService);

  data: any[] = [];

  ngOnInit(): void {
      this._experiences.getExperiences().subscribe({
        next: (data: any) => {
          this.data = data.experiences;

          console.log(this.data);
        },
        error: (error: any) => {}
      })
  };
}
