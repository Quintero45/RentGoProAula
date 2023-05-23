import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Archivo } from 'src/app/model/archivo';
import { ArchivoService } from 'src/app/services/archivo.service';

@Component({
  selector: 'app-archivos-home',
  templateUrl: './archivos-home.component.html',
  styleUrls: ['./archivos-home.component.css']
})
export class ArchivosHomeComponent implements OnInit {

  archivos:Archivo[];
  name:string;
  archivo: Archivo = new Archivo();

  suscription:Subscription;
  constructor(private archivoService : ArchivoService , private router:Router , private route:ActivatedRoute) { }


  ngOnInit(): void {
    this.getArchivos();
    this.suscription = this.archivoService.refresh$.subscribe(() => {
      this.getArchivos
    })
  }

  ArchivoRegister(){
    this.archivoService.ArchivoRegister(this.archivo).subscribe( dato =>{
      console.log(dato);
      // this.goToArchivoList();
      this.getArchivos();
      this.archivo.name = "";
    });
  }

  goToArchivoList(){
    this.router.navigate(['car/document']);
  }


  ArchivoUpdate(archivo:Archivo){
    this.router.navigate(['car/document/update',archivo]);
  }

  ArchivoDelete(name: string){
    if(confirm(" ¿Estas seguro de eliminar este documento?")){
      this.archivoService.ArchivoDelete(name).subscribe(dato =>{
        console.log(dato);
        this.getArchivos();
      })
    }

  }

  private getArchivos(){
    this.archivoService.getArchivoList().subscribe(dato => {
      this.archivos = dato;
    });
  }

  onSubmit(){
    this.ArchivoRegister();
    this.goToArchivoList();
  }

}
