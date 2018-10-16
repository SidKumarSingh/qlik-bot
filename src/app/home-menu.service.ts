import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()

export class HomeMenuService {
	private subject = new Subject();
	get menu$(): Observable<any> {
    	return this.subject.asObservable();
	}
	
	open() {
		this.subject.next();
	}
}