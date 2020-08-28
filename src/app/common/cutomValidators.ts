import { AbstractControl, ValidationErrors } from '@angular/forms';


export class usernameValidators{
    static canNotContainSpace(control:AbstractControl):ValidationErrors | null{
        if((control.value as string).includes(' '))
            return {canNotContainSpace : true}
        
        return null;
    }
}