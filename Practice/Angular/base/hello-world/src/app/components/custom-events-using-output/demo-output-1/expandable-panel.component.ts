import {Component, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'app-expandable-panel',
    standalone: true,
    template: `
        <div>
            <button (click)="closePanel()">Close</button>
            <button (click)="resizePanel(200, 100)">Resize</button>
            <button (click)="emitAliasEvent()">Emit Alias Event</button>
        </div>
    `
})
export class ExpandablePanelComponent {

    @Output() panelClosed = new EventEmitter<void>();
    @Output() panelResized = new EventEmitter<{ width: number, height: number }>();
    @Output('aliasEvent') eventWithAlias = new EventEmitter<string>();

    closePanel() {
        this.panelClosed.emit();
    }

    resizePanel(width: number, height: number) {
        this.panelResized.emit({ width, height });
    }

    emitAliasEvent() {
        this.eventWithAlias.emit('This is an aliased event');
    }

}
