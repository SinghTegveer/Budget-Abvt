import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "default",
    standalone: true
})
export class DefaultPipe implements PipeTransform {
    transform(value: any, fallback: string) {
        return value != null && value != '' ? value : fallback;
    }
    
}