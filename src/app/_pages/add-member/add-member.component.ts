import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MemberService } from 'src/app/_services/member.service';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: []
})
export class AddMemberComponent {
  profileForm: FormGroup;
  errorMessage: any;
  ids: number = 1;

  constructor(private fb: FormBuilder, private memberService: MemberService, private router:Router){

    this.profileForm = this.fb.group({
      id: this.ids,
      name: ["", Validators.required],
      email: ["", Validators.required],
      semester: ["", Validators.required],
      career: ["", Validators.required],
  });

  }

  ngOnInit(): void{

  }

  onSubmit(): void{

    console.log(this.profileForm.value);
    this.memberService.createMember(this.profileForm.value).subscribe({
      next: () => {
        this.router.navigateByUrl('/members');
      },
      error: (result) => {
        if (typeof result.error === 'string') {
          this.errorMessage = result.error;
        } else {
          this.errorMessage = 'Intente nuevamente';
        }
      },
    });
    this.ids = this.ids + 1;
  }

}
