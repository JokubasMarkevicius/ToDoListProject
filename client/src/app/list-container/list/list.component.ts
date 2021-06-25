import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface ListItem {
  title: string;
  description: string;
  dateSet: number;
  deadline: number;
  done: boolean;
}

const MOCK_DATA: ListItem[] = [
  {
    dateSet: 1624038967345,
    deadline: 1624038967345,
    title: 'Go shopping',
    description:
      'this is an extra long description for this item in my to do list mock data array.',
    done: false,
  },
  {
    dateSet: 1624038967345,
    deadline: 1624038967345,
    title: 'Go for a walk',
    description: 'none',
    done: false,
  },
  {
    dateSet: 1624038967345,
    deadline: 1624038967345,
    title: 'Write some code',
    description: 'none',
    done: false,
  },
  {
    dateSet: 1624038967345,
    deadline: 1624038967345,
    title: 'Talk to people',
    description: 'none',
    done: false,
  },
  {
    dateSet: 1624038967345,
    deadline: 1624038967345,
    title: 'Sleep',
    description: 'none',
    done: false,
  },
  {
    dateSet: 1624038967345,
    deadline: 1624038967345,
    title: 'Sleep some more',
    description: 'none',
    done: false,
  },
  {
    dateSet: 1624038967345,
    deadline: 1624038967345,
    title: 'Sleep even more',
    description: 'none',
    done: false,
  },
];

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngOnInit(): void {}

  checked(item: ListItem) {
    if (item.done) {
      item.done = false;
    } else {
      item.done = true;
    }
  }

  deleteRow(item: ListItem) {
    const index = this.dataSource.data.indexOf(item);
    this.dataSource.data.splice(index, 1);
    this.dataSource._updateChangeSubscription();
    // I read that the below code may be necessary to update the paginator but it seems like it works without it
    // this.dataSource.paginator = this.paginator;
  }

  // The code below is used to create a table with pages
  displayedColumns: string[] = [
    'title',
    'description',
    'dateSet',
    'deadline',
    'done',
    'edit',
    'delete',
  ];
  dataSource = new MatTableDataSource<ListItem>(MOCK_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
