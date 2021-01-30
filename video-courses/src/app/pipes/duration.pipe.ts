import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'sortByDuration'
})

export class DurationPipe implements PipeTransform {
  transform(duration: number): string {
    if (duration >= 0 && duration / 60 > 1) {
      return `${Math.floor(duration / 60)}h ${duration % 60}min`;
    } else if (duration < 0) {
      return "0 min";
    }
    return `${duration} min`;
  }
}
