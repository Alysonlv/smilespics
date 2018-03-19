import { PhotoComponent } from './../photo/photo.component';
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'filterByTitle'
})
export class FilterByTitle implements PipeTransform {
    transform(list: PhotoComponent[], input) {
        return list.filter(
            photo => photo.titulo.toUpperCase().includes(input.toUpperCase())
        );
    }
}