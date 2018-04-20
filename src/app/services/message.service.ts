import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';

@Injectable()
export class MessageService {
	constructor(private http: Http) {

	}

	public processMessage(...args: Array<Object>): any {
		return this.http.get(
			`${environment.DATA_PATH}/denni_kurz.txt?${args.map((arg: Object) => { return `${arg['name']}=${arg['value']}`; }).join('&')}`,
			'{responseType: "text"}');
	}
}
