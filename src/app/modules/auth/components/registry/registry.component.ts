import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.css']
})
export class RegistryComponent implements OnInit{
  
  registryForm!: FormGroup;

  constructor(private readonly fb: FormBuilder){}


  ngOnInit(): void{
    this.registryForm = this.initForm();
  }

  onSubmit(): void{
    console.log('Form->')
  }

  initForm(): FormGroup{
    return this.fb.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }
}
