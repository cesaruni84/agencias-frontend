import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { Agencia } from '../../../shared/models/Agencia';
import { AgenciaService } from '../../../core/services/agencia.service';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  // Data Source
  dataSource: MatTableDataSource<Agencia>;

  // Nombre de columnas
  nameColumns: string[] = ['Id', 'Agencia', 'Distrito', 'Provincia', 'Departamento', 'Dirección', 'Latitud', 'Longitud'];

  // Para la paginación
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  // Para el Sort
  @ViewChild(MatSort, {static: true}) sort: MatSort;


  constructor(private agenciaService: AgenciaService) {
    // Invoca a Backed
    this.agenciaService.listarAgencias().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
   }

  ngOnInit() {
  }

}
