import { BlogValidator } from './my-validator';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators, FormArray } from '@angular/forms';
import { Reg } from './blog-reg-domain';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent implements OnInit {

  fg: FormGroup;
  isConPass = false;
  reqRes: any;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    const usNmComp = Validators.compose([
      Validators.required,
      BlogValidator.custValidator
    ]);

    const emVlCmp = Validators.compose([
      Validators.required,
      Validators.email
    ]);

    this.fg = this.fb.group({
      usNm: this.fb.control('', usNmComp),
      eml: this.fb.control('', emVlCmp),
      pass: this.fb.control('', Validators.required),
      dyna: this.fb.array([])
    });
  }

  onDyna() {
    const dynaArr = this.fg.controls.dyna as FormArray;
    dynaArr.push(this.fb.control(''));
  }

  onSub(conPass: string) {
    console.log(this.fg);
    console.log(this.fg.value);


    const regDmn = this.fg.value as Reg;
    // tslint:disable-next-line: triple-equals
    this.isConPass = (conPass == regDmn.pass);
    this.reqRes.createUser(regDmn).subscribe(res => {
      console.log(res);
      // 2xx - request sent from client and received by server, server processed it and sent back success response
      // 3xx - redirection
      // 4xx - releated resource and request payload errors
      // 5xx - internal server error
    })
  }
}

