import {Passenger} from "../shared/passenger";
import {Http, URLSearchParams, Headers} from "@angular/http";
import {Injectable} from "@angular/core";

@Injectable()
export class MigratedPassengerService {

    constructor(private http: Http) {
    }

    find(name): Promise<Passenger[]> {
        var url = 'http://www.angular.at/api/passenger';

        var search = new URLSearchParams();
        search.set('name', name);

        var headers = new Headers();
        headers.set('Accept', 'text/json');

        return this
            .http
            .get(url, {search, headers})
            .map(resp => resp.json())
            .toPromise();
    }
}