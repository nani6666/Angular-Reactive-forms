import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-sample-form',
  templateUrl: './sample-form.component.html',
  styleUrls: ['./sample-form.component.css']
})
export class SampleFormComponent implements OnInit {
  sampleForm: FormGroup;
  public post :any;
  public title : string = '';
  public description : string = '';
  public postArray : any = new Array();;
  constructor(private formbuilder:FormBuilder) {
    this.sampleForm = formbuilder.group({
    'title':[null ,Validators.required],
    'description':[null ,Validators.required]
   });
   }
   addPost(post){
     this.title = post.title;
     this.description = post.description;
     this.postArray.push(post);
     this.sampleForm.reset();
    // console.log(this.postArray);
   }
  ngOnInit() {
   
  }

}
