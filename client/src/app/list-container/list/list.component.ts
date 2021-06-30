import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DbConnectionService } from 'src/app/db-connection.service';
import { ListItem } from 'src/app/types';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements AfterViewInit {
  constructor(private db: DbConnectionService) {}

  getListData() {
    this.db.getListItems().subscribe((data) => {
      this.dataSource = new MatTableDataSource<ListItem>(data);
      this.dataSource._updateChangeSubscription();
      this.dataSource.paginator = this.paginator;
    });
  }

  deleteItem(id: string) {
    this.db.deleteListItem(id);
  }

  dataSource?: any;

  displayedColumns: string[] = [
    'title',
    'description',
    'dateSet',
    'deadline',
    'done',
    'edit',
    'delete',
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.getListData();
  }
}
