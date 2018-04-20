import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MessageService } from './services/message.service';
import { NgForm } from '@angular/forms';
import { MatTableDataSource, MatSort } from '@angular/material';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	providers: [MessageService]
})
export class AppComponent implements AfterViewInit {

	searchValue: string;
	tableData: MatTableDataSource<Object>;
	columns: Array<string>;

	@ViewChild(MatSort) sort: MatSort;

	public constructor(private serviceMessage: MessageService)
	{
		this.tableData = new MatTableDataSource();
		this.columns = ['country', 'currency', 'quantity', 'code', 'rate'];
	}

	public ngAfterViewInit(): void {
		this.tableData.sort = this.sort;
	}

	public search(formData: NgForm): void {
		let data: Array<Object>;
		let searchQuery: Date = formData.value['searchDate'];
		if (!searchQuery)
		{
			// Invalid input!
			return;
		}

		// Get results
		this.serviceMessage.processMessage({ name: 'date', value: `${searchQuery.getDate()}.${searchQuery.getMonth() + 1}.${searchQuery.getFullYear()}` })
		.subscribe(message => {

			// Process results
			data = message.text()
			.split('\n')
			.map((valRow: string) => {
				let row: Array<string> = valRow.split('|');
				return row.reduce((json: JSON, valCell: string, idx: number) => { json[this.columns[idx]] = valCell; return json; }, {});
			});

			// Filter results
			data.shift();
			data.shift();
			data.pop();

			// Apply results
			this.tableData.data = data;
		});
	}
}
