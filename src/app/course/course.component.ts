import { AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";

import { CoursesService } from "./courses.service";

// db-data


// import { debounceTime, distinctUntilChanged, startWith, tap, delay } from 'rxjs/operators';
// import { merge } from "rxjs/observable/merge";
// import { fromEvent } from 'rxjs/observable/fromEvent';


import { Observable } from 'rxjs/Observable';
import { debounceTime, distinctUntilChanged, startWith, tap, delay } from 'rxjs/operators';
import { merge } from "rxjs/observable/merge";
import { fromEvent } from 'rxjs/observable/fromEvent';

import { map } from 'rxjs/operator/map';

import { LessonsDataSourceService } from "./lessons-data-source.service";
 

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {


 displayedColumns= ["seqNo", "description", "duration"];
  constructor() { }

  ngOnInit() {
  }

}
