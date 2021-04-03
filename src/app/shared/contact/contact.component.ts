import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgwWowService } from 'ngx-wow';
import { Cont } from './cont';
import { ContactUsService } from './contact-us.service';
import * as $ from 'jquery'
import { Router } from '@angular/router';
import * as AOS from 'aos';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @ViewChild('UploadFileInput', { static: false }) uploadFileInput: ElementRef | any;
  fileInputLabel: any;

  websiteList: any = ['$50,000+','$25,000 to $50,000', '$10,000 to $25,000', '$5,000 to $10,000','Less than $5,000']


  constructor(private wowService:NgwWowService , private contactSer:ContactUsService ,private http:HttpClient,
     private fb:FormBuilder, private router:Router) {
    this.wowService.init();
   }
   uploadForm: FormGroup |any ; 
   ngOnInit() {
AOS.init();
    // $(document).ready(function(){
    //   $("#isro").click(function(){
    //     $("#isro").toggleClass("activeOp");
    //     alert('Heyy');
    //   });
    // });
    
    // const PAT_NAME = "^[a-zA-Z ]{2,20}$";
    // const PAT_EMAIL = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.][a-zA-Z]{2,4}$";
 
     this.getService();
     this.uploadForm = this.fb.group({
       projects: this.fb.array([], [Validators.required]),
 
       file: ['', [Validators.required]],
       fullname:['', [Validators.required]],
       email:['', [Validators.required, Validators.email]],
       skypeId:['', [Validators.required]],
       country:['', [Validators.required]],
       budget: new FormControl('', [Validators.required]),
       description:['', [Validators.required]],
       // projects:['']
     });
 
   }
  //  val =false;

  //  menuToggle(){
  //   val.active = !val.active;
  //  }

  // classApplied = false;

  // toggleClass() {
  //   this.classApplied = !this.classApplied;
  // }


   changeWebsite(e:any) {
    // console.log(e.target.value);
  }

   onFileSelect(event : any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.get('file').setValue(file);
      this.fileInputLabel = file.name;

    }
  }

  
  SERVER_URL = "https://beta.9brainz.store/api/contact-us-mail";
  showMsg: boolean = false;
  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.uploadForm.get('file').value);
    formData.append('fullname', this.uploadForm.get('fullname').value);
    formData.append('email', this.uploadForm.get('email').value);
    formData.append('skypeId', this.uploadForm.get('skypeId').value);
    formData.append('country', this.uploadForm.get('country').value);
    formData.append('budget', this.uploadForm.get('budget').value);
    formData.append('description', this.uploadForm.get('description').value);
    formData.append('projects', this.uploadForm.get('projects').value);

    this.http.post<any>(this.SERVER_URL, formData).subscribe(response => {
      console.log(response);
      if (response.statusCode === 200) {
        // Reset the file input
        this.uploadFileInput.nativeElement.value = "";
        this.fileInputLabel = undefined;
        this.showMsg= true;
        // this.message="Congratulations Details Send..🤣🤣"
      }
    }, error => {
      // console.log(error);
    });
    
  console.log(this.uploadForm.value);
  this.uploadForm.reset();
  this.router.navigateByUrl('/');

  }

  onCbChange(e:any) {
    const projects: FormArray = this.uploadForm.get('projects') as FormArray;

    if (e.target.checked) {
      projects.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      projects.controls.forEach((item:any) => {
        if (item.value == e.target.value) {
          projects.removeAt(i);
          return;
        }
        i++;
      });
    }
 }



  service : Cont |any;

  getService(){
    this.contactSer.getTechnology().subscribe((res)=>{
      this.service = res.data;
    })
  }

}
