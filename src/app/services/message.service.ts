import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class MessageService {

	private static DATA_PATH = 'data/denni_kurz.txt';

	constructor(private http: Http) {

	}

	public processMessage(...args: Array<Object>): any {
		return this.http.get(
			`${MessageService.DATA_PATH}?${args.map((arg: Object) => { return `${arg['name']}=${arg['value']}`; }).join('&')}`,
			'{responseType: "text"}');
	}
}
