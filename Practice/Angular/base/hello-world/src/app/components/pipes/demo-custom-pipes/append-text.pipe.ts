import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'appendText',
    standalone: true
})
export class AppendTextPipe implements PipeTransform {

    transform(value: string, text: string, position: 'start' | 'end' = 'end'): string {
        return position === 'start' ? text + value : value + text;
    }

}
