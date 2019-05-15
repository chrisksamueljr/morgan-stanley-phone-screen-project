import { Component, ViewChild, OnInit } from '@angular/core';
import {Sort, MatSort, MatTableDataSource} from '@angular/material';

export interface AccountsTypes { 
	identity: number;
	name: string;
	available_cash: string;
	today_change: string;
	positive: boolean;
}


const ACCOUNTS_DATA: AccountsTypes[] = [
	{
		identity: 0,
		name: 'AAA - 0029',
		available_cash: '$39,160,334.42',
		today_change: '-0.07% /$31, 435,87',
		positive: false
	},
	{
		identity: 1 ,
		name: 'IRA - 0146',
		available_cash: '$15,884,302.39',
		today_change: '+0.03% /$7,430.83',
		positive: true
	},
	{
		identity: 2 ,
		name: 'AAA - 1812',
		available_cash: '$2,010,926.10',
		today_change: '+0.21% /$38,881.63',
		positive: true
	},
	{
		identity: 3 ,
		name: 'REG - 2019',
		available_cash: '$13,465,679.34',
		today_change: '0.00% /$0.00',
		positive: null
	},
	{
		identity: 4,
		name: 'AAA - 3810',
		available_cash: '$10,050,054.07',
		today_change: '+0.08% /$8,916,69',
		positive: true
	},
	{
		identity: 5,
		name: 'IRA - 5200',
		available_cash: '$5,763.36',
		today_change: '-0.08% /$8,916,69',
		positive: false
	}

	
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {



title = 'morgan-stanley';
hideAccountId = true;
displayedColumns: string[] = ['name',  'available_cash'];
dataSource = new MatTableDataSource(ACCOUNTS_DATA);

@ViewChild(MatSort) sort: MatSort;



 setColor(change) {
 	console.log('setColor()')
 	switch (change) {
 		case true :
 			return 'green';
 		case false :
 			return 'red';
 		case null :
 			return 'gray';	
 	}
 }

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

}	
