import {Flight} from "../shared/flight";
import {FlightService} from "../services/flight.service";
import {BookingEventService} from "../services/booking-event.service";
import {Component, Inject} from "@angular/core";

@Component({
    selector: 'migrated-flight-search',
    templateUrl: './migrated-flight-search.component.html'
})
export class MigratedFlightSearchComponent {

    public from: string = 'Hamburg';
    public to: string = 'Graz';
    public selectedFlight: Flight = null;

    constructor(@Inject('flightService') private flightService: FlightService,
                @Inject('bookingEventService') private bookingEventService: BookingEventService) {
    }

    public getFlights() {
        return this.flightService.flights;
    }

    public search() {
        return this
            .flightService
            .find(this.from, this.to)
            .catch(function (resp) {
                console.debug(resp);
            });
    }

    public select(f) {
        this.selectedFlight = f;
        this.bookingEventService.publish(f);
    }
}
