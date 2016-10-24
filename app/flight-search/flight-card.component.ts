import {Flight} from '../shared/flight';

import * as angular from 'angular';

class FlightCardController {
    item: Flight;
    selectedItem: Flight;
    selectedItemChange: Function;

    select() {
        this.selectedItem = this.item;
        this.selectedItemChange(this.item);
    }

    $onInit() {
        console.log('FlightCardController $onInit called');
    }

    $onChanges(changes) {
        console.log('FlightCardController $onChanges called');
        console.log(changes);
    }
}

export const FlightCardComponent : angular.IComponentOptions = {
    controller: FlightCardController,
    templateUrl: 'flight-card.component.html',
    transclude: true,
    bindings: {
        item: '<',
        selectedItem: '<',
        selectedItemChange: '&'
    }
}
