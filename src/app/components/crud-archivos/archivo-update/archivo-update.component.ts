import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Archivo } from 'src/app/model/archivo';
import { ArchivoService } from 'src/app/services/archivo.service';

@Component({
  selector: 'app-archivo-update',
  templateUrl: './archivo-update.component.html',
  styleUrls: ['./archivo-update.component.css']
})
export class ArchivoUpdateComponent implements OnInit {

  id: string;
  archivo: Archivo = new Archivo();

  constructor(
    private archivoService: ArchivoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.archivoService.getArchivo(this.id).subscribe(
      (dato) => {
        this.archivo = dato;
      });
  }

  goToArchivoList() {
    this.router.navigate(['car/document']);
  }


  onSubmit() {
    this.archivoService.ArchivoUpdate(this.id,this.archivo).subscribe(
      (dato) => {
        this.goToArchivoList();
      });
  }
}
