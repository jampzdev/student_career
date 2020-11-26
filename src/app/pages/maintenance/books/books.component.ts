import { Component, OnInit, Injector, ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import { ApiService } from '../../../services/api.service';
import { BaseComponent } from "../../../base-component";
import { ModalDirective } from 'ngx-bootstrap/modal';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent extends BaseComponent implements OnInit {
  @ViewChild("AddBook") public AddBook: ModalDirective
  @ViewChild("EditBook") public EditBook: ModalDirective

  books_list            = []
  key                   = ""
  title                 = ""
  author                = ""
  owner                 = ""
  location              = ""
  status                = ""
  search_book           = ""
  user_name             = ""
  checked_out_date      = ""
  book_comments         = ""

  constructor(public injector: Injector, private http: Http, private API: ApiService) {
    super(injector);
  }

  ngOnInit() {
    this.getBooks()
  }

  getBooks() {
    if (this.search_book != "") {
      this.API.post("/get-books", {
        search: this.search_book
      }).subscribe(data => {
        if (data.itemCount != 0) {
          this.books_list = data.devMessage
          console.log(this.books_list)
        }
      },
        (error: any) => {
          console.log(error)
        }
      )
    }
    else {
      this.API.post("/get-books", {
        search: ""
      }).subscribe(data => {
        if (data.itemCount != 0) {
          this.books_list = data.devMessage
          console.log(this.books_list)
        }
      },
        (error: any) => {
          console.log(error)
        }
      )
    }
  }

  formDefaultSettings(){
    this.title = ""
    this.author = ""
    this.owner = ""
    this.location = ""
    this.status = "Available"
  }

  saveBook(){
    if(this.title == "" || this.author == "" || this.owner == "" || this.location == ""){
      Swal.fire("Oops","Required Field(s) Missing!","warning")
    }
    else{
      this.API.post("/save-book",{
        "title" : this.title,
        "author":this.author,
        "owner":this.owner,
        "location":this.location,
        "status":this.status,
      }).subscribe(data => {
        if(data.statusCode == 200){
          Swal.fire("Success",data.devMessage,"success")
          this.getBooks()
          this.AddBook.hide()
        }
      },
        (error: any) => {
          console.log(error)
        }
      )
    }
  }

  editBook(data:any) {
    this.key      = data.id
    this.title    = data.title
    this.author   = data.author
    this.owner    = data.owner
    this.location = data.location
    this.status   = data.status
  }

  updateBook() {
    if (this.title == "" || this.author == "" || this.owner == "" || this.location == "") {
      Swal.fire("Oops", "Required Field(s) Missing!", "warning")
    }
    else {
      this.API.post("/update-book", {
        "id": this.key,
        "title": this.title,
        "author": this.author,
        "owner": this.owner,
        "location": this.location,
        "status": this.status,
      }).subscribe(data => {
        if (data.statusCode == 200) {
          Swal.fire("Success", data.devMessage, "success")
          this.getBooks()
          this.EditBook.hide()
        }
      },
        (error: any) => {
          console.log(error)
        }
      )
    }
  }

  viewBook(data: any) {
    this.key = data.id
    this.title = data.title
    this.author = data.author
    this.owner = data.owner
    this.location = data.location
    this.status = data.status
    this.user_name = data.user_name
    this.checked_out_date = data.checked_out_date

  }

  getComments() {
    var bookid = this.key
    this.API.post("/get-comments", {
      "bookid": bookid
    }).subscribe(data => {
      if (data.itemCount != 0) {
        this.book_comments = data.devMessage
      }
    },
      (error: any) => {
        console.log(error)
      }
    )
  }

}
