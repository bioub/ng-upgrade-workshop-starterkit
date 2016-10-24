import {Flight} from "../shared/flight";
import {FlightService} from "../services/flight.service";
import {BookingEventService} from "../services/booking-event.service";

export class FlightSearchController {

    public from: string = 'Hamburg';
    public to: string = 'Graz';
    public selectedFlight: Flight = null;

    constructor(private flightService: FlightService, private bookingEventService: BookingEventService) {}

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


