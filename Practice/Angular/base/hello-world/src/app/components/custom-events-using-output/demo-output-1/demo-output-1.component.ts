import {Component} from '@angular/core';
import {ExpandablePanelComponent} from "./expandable-panel.component";
import {CustomSliderComponent} from "./custom-slider.component";

@Component({
    selector: 'app-demo-output-1',
    imports: [ExpandablePanelComponent, CustomSliderComponent],
    standalone: true,
    template: `
        <app-expandable-panel
            (panelClosed)="handlePanelClosed()"
            (panelResized)="handlePanelResized($event)"
            (aliasEvent)="handleAliasEvent($event)">
        </app-expandable-panel>

        <app-custom-slider (volumeChanged)="handleVolumeChange($event)"></app-custom-slider>
    `
})
export class DemoOutput1Component {

    handlePanelClosed() {
        console.log('Panel has been closed');
    }

    handlePanelResized(event: { width: number, height: number }) {
        console.log(`Panel resized to Width: ${event.width}, Height: ${event.height}`);
    }

    handleAliasEvent(event: string) {
        console.log(`Received alias event: ${event}`);
    }

    handleVolumeChange(volume: number) {
        console.log(`Volume changed to: ${volume}`);
    }

}
