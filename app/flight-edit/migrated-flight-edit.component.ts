import {FlightService} from "../services/flight.service";
import {Flight} from "../shared/flight";
import {Component, OnInit, Input, Inject} from "@angular/core";

@Component({
    selector: 'flight-edit',
    templateUrl: './migrated-flight-edit.component.html'
})
export class MigratedFlightEditComponent implements OnInit {
    @Input() public id: string;
    public info: String = 'Flight Edit';
    public flight: Flight = <any>{};
    public message: string;

    constructor(@Inject('flightService') private flightService: FlightService) {
    }

    save() {

        this.flightService
            .save(this.flight)
            .then((flight: Flight) => {
                this.flight = flight;
                this.message = '';
            })
            .catch(resp => {
                console.error(resp);
                this.message = resp.data;
            })
    }

    ngOnInit() {
        this.flightService
            .getById(this.id)
            .then((flight: Flight) => {
                this.flight = flight;
                this.message = '';
            })
            .catch(resp => {
                console.error(resp);
                this.message = resp.data;
            })
    }
}
