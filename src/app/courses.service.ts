import {Injectable} from '@angular/core'

@Injectable()
export class CoursesService{
    getCourses(){
        return ['JavaScript', 'HTML', 'CSS3', 'Angular', 'TypeScript'];
    }
}