import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivateGuard } from '../activate-gaurd';
import { DeactivateGuard } from '../deactivate-guard';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

   complexForm : FormGroup;
   emailp = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)+(\.[a-z]{3,15})$';
	 mobp = '[0-9]{10}';
	 passp ='[a-z0-9]{7,20}';

  constructor(fb: FormBuilder){
    this.complexForm = fb.group({
      'name':[null, Validators.required],
      'Username': [null, Validators.required] ,
      'Email' : [null, Validators.compose([Validators.required, Validators.pattern(this.emailp)]) ],
      'mob':"",
      'password' : [null, Validators.compose([Validators.required, Validators.pattern(this.passp)]) ],
      'rpassword' : [null, Validators.compose([Validators.required, Validators.pattern(this.passp)]) ]
    })
  }

  submitForm(value: any){
    console.log(value);
  }

 canDeactivate() {
    return this.checked;
  }

  checkboxChanged(checked) {
    this.checked = checked;
  }



  ngOnInit() {
  }

}
