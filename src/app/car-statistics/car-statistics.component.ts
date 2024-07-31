import { Component, ViewChild } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { carStatistics } from '../../../car-stats';
import { Carstatistics } from '../carstatistics';

@Component({
  selector: 'app-car-statistics',
  standalone: true,
  imports: [NgFor, MatTableModule, MatPaginatorModule, MatButtonModule],
  templateUrl: './car-statistics.component.html',
  styleUrl: './car-statistics.component.css'
})
export class CarStatisticsComponent {
  carList: any[] = [];
  masterAgentTable: any;
  dataSource?: any;

  displayedColumns: string[] =
    ['Name', 'Miles per gallon', 'Cylinders', 'Displacement', 'Horsepower', 'Weight in lbs', 'Acceleration', 'Year', 'Origin'];

  @ViewChild(MatPaginator) paginator?: MatPaginator;

  constructor() {

  }

  sortByName(a: any, b: any) {
    if (a.Name < b.Name) return -1;
    if (a.Name > b.Name) return 1;
    return 0;
  }

  ngOnInit(){
    this.carList = carStatistics.sort((a, b) => this.sortByName(a, b));
    this.dataSource = new MatTableDataSource<Carstatistics>(this.carList);
    this.dataSource.paginator = this.paginator;
  }

  // filterRole(role: string) {
  //   this.role = role;
  //   this.filterTable(this.role, this.name);
  // }

  // filterName(name: string) {
  //   this.name = name;
  //   this.filterTable(this.role, this.name);
  // }

  // filterTable(role: string, name: string) {
  //   this.agentTable = this.masterAgentTable;
  //   if (role !== "") {
  //     this.agentTable = this.agentTable.filter((agent: any) => agent.role === role);
  //   }
  //   if (name !== "") {
  //     const lowerCaseName = name.toLowerCase();
  //     this.agentTable =
  //       this.agentTable
  //         .filter((agent: any) =>
  //           agent.firstName.toLowerCase().includes(lowerCaseName) || agent.lastName.toLowerCase().includes(lowerCaseName));
  //   }
  //   this.dataSource = new MatTableDataSource<any>(this.agentTable);
  //   this.dataSource.paginator = this.paginator;
  // }
}
