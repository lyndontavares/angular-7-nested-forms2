import { Component } from '@angular/core';
import { FormBuilder, FormArray, Validators } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  constructor(public fb: FormBuilder) {}

  /*################ Registration Form ################*/
  registrationForm = this.fb.group({
    addDynamicElement: this.fb.array([])
  })

  /*############### Add Dynamic Elements ###############*/
  get addDynamicElement() {
    return this.registrationForm.get('addDynamicElement') as FormArray
  }

  addItems() {
    this.addDynamicElement.push(this.fb.control(''))
  }

  // Submit Registration Form
  onSubmit() {
    alert(JSON.stringify(this.registrationForm.value))
  }

}