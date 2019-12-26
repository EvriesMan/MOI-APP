import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-editorder',
  templateUrl: './editorder.component.html',
  styleUrls: ['./editorder.component.css']
})
export class EditorderComponent implements OnInit {

  id:number;

  constructor(private activatedRoute: ActivatedRoute) {
    this.id = activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
  }

}
