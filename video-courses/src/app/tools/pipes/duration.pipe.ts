import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'sortByDuration'
})

export class DurationPipe implements PipeTransform {
  transform(length: number): string {
    if (length >= 0 && length / 60 > 1) {
      return `${Math.floor(length / 60)}h ${length % 60}min`;
    } else if (length < 0) {
      return "0 min";
    }
    return `${length} min`;
  }
}
