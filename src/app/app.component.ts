import { Component } from '@angular/core';
import {Sort} from '@angular/material';

export interface AccountsTypes{
	id: string;
	name: string;
	available_cash: string;
	today_change: string;
	positive: boolean;
}

const ACCOUNTS_DATA: AccountsTypes[] = [
	{
		id: '0029',
		name: 'AAA - 0029',
		available_cash: '$39,160,334.42',
		today_change: '-0.07% /$31, 435,87',
		positive: false
	},
	{
		id: '0146',
		name: 'IRA - 0146',
		available_cash: '$15,884,302.39',
		today_change: '+0.03% /$7,430.83',
		positive: true
	},
	{
		id: '1812',
		name: 'AAA - 1812',
		available_cash: '$2,010,926.10',
		today_change: '+0.21% /$38,881.63',
		positive: true
	},
	{
		id: '2019',
		name: 'REG - 2019',
		available_cash: '$13,465,679.34',
		today_change: '0.00% /$0.00',
		positive: null
	},
	{
		id: 'AAA',
		name: 'AAA - 3810',
		available_cash: '$10,050,054.07',
		today_change: '+0.08% /$8,916,69',
		positive: true
	},
	{
		id: 'IRA',
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
dataSource = ACCOUNTS_DATA;

sortedData: AccountsTypes[];


constructor() {
 this.sortedData = this.dataSource.slice();
}


 sortData(sort: Sort) {
    const data = this.dataSource.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

 this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'id': return this.compare(a.name, b.name, isAsc);
        default: return 0;
      }
    });
  }


 setColor(change) {
 	switch (change) {
 		case true :
 			return 'green';
 		case false :
 			return 'red';
 		case null :
 			return 'gray';	
 	}
 }


 compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}



}	
