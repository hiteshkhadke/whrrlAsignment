import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InfoserviceService } from '../infoservice.service';

@Component({
  selector: 'app-fill-info',
  templateUrl: './fill-info.component.html',
  styleUrls: ['./fill-info.component.css']
})
export class FillInfoComponent implements OnInit {
  @Input()childSocialInfoObj: {name: string};
  constructor(private infoService: InfoserviceService) { }

  profileForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    mobilenumber: new FormControl('', [Validators.required, Validators.pattern('([0-9]+){10}')]),
    nationality: new FormControl('', [Validators.required]),
    filename: new FormControl('', [Validators.required]),
    
  });

  ngOnInit() {
    console.log('in ngoninit'+ this.profileForm);
  }

  onSubmit () {
    console.log(this.profileForm.value);
    this.infoService.insertInfo(this.profileForm.value).subscribe(repos => {
  		console.log(repos);
  	});
  }

}
