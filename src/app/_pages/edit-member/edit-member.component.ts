import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MemberService } from 'src/app/_services/member.service';

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: []
})
export class EditMemberComponent {

  profileForm: FormGroup;

  constructor(private fb: FormBuilder, private memberService: MemberService, private router:Router){

    this.profileForm = this.fb.group({
      name: ["", Validators.required],
      email: ["", Validators.required],
      semester: ["", Validators.required],
      career: ["", Validators.required],
  });

  }

  ngOnInit(): void{

  }

  onSubmit(): void{

    this.memberService.createMember(this.profileForm.value);

  }

}
