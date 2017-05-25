import { CanDeactivate } from '@angular/router';
import { FormComponent } from './form/form.component';

export  class DeactivateGuard implements CanDeactivate<FormComponent>
{

  canDeactivate(component: FormComponent) {
    let can = component.canDeactivate();
    console.log('DeactivateGuard#canDeactivate called, can: ', can);
    if (!can) {
      alert('Save first!');
      return false;
    }

    return true;
  }

}