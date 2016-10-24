import {Component, AfterContentInit, OnInit, Input} from "@angular/core";

@Component({
    selector: 'tabs',
    template: `
        <div>
            <span *ngFor="let tab of tabs">
                <a (click)="activate(tab)">{{tab.title}}</a>
            </span>

            <ng-content></ng-content>
        </div>
    `,
    styleUrls: ['./migrated-tab.css']
})
export class MigratedTabsComponent implements AfterContentInit {

    private tabs: Array<MigratedTabComponent> = [];

    public register(tab: MigratedTabComponent) {
        this.tabs.push(tab);
    }

    public activate(active: MigratedTabComponent) {
        for (let tab of this.tabs) {
            tab.visible = (tab == active);
        }
    }

    ngAfterContentInit(): void {
        if (this.tabs.length == 0) return;
        this.activate(this.tabs[0]);
    }
}

@Component({
    selector: 'tab',
    template: `
        <div *ngIf="visible">
            <h2>{{title}}</h2>
            <ng-content></ng-content>
        </div>
    `
})
export class MigratedTabComponent implements OnInit {

    public visible: boolean = false;
    @Input() public title: string;

    constructor(private tabs: MigratedTabsComponent) {
    }

    ngOnInit(): void {
        this.tabs.register(this);
    }
}
