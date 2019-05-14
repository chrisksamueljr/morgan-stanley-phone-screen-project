import { Component } from '@angular/core';

export interface AccountsTypes{
	id: string;
	name: string;
	available_cash: string;
	today_change: string;
}

const ACCOUNTS_DATA: AccountsTypes[] = [
	{
		id: '0029',
		name: 'AAA - 0029',
		available_cash: '39,160,334.42',
		today_change: '-0.07% /$31, 435,87'
	}
	
]


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

}
