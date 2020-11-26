import { Component, OnInit, Injector, ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import { ApiService } from '../../../services/api.service';
import { BaseComponent } from "../../../base-component";
import { ModalDirective } from 'ngx-bootstrap/modal';
import * as moment from 'moment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-borrow',
  templateUrl: './borrow.component.html',
  styleUrls: ['./borrow.component.scss']
})
export class BorrowComponent extends BaseComponent implements OnInit {
  @ViewChild("ViewBook") public ViewBook: ModalDirective

  books_list    = []
  book_comments = []
  key = ""
  title = ""
  author = ""
  owner = ""
  location = ""
  status = ""
  ta_comment = ""
  user_name = ""
  checked_out_date = ""
  search_book   = ""
  temp = localStorage.getItem("user_logged_in")
  user_logged_in = JSON.parse(this.temp)


  constructor(public injector: Injector, private http: Http, private API: ApiService) {
    super(injector);
  }

  ngOnInit() {
    this.getBooks()
  }

  getBooks() {
    if (this.search_book!=""){
      this.API.post("/get-books",{
        search : this.search_book
      }).subscribe(data => {
        if (data.itemCount != 0) {
          this.books_list = data.devMessage
          console.log(this.books_list)
        }
        else{
          this.books_list = []
        }
      },
        (error: any) => {
          console.log(error)
        }
      )
    }
    else{
      this.API.post("/get-books",{
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

  submitComment(){
    var userid       = this.user_logged_in[0].id
    var bookid       = this.key
    var comment_date = moment().format("YYYY-MM-DD HH:mm A")
    var comment      = this.ta_comment

    if (comment == ""){
      Swal.fire("Oops","Please write a comment","warning")
    }
    else{
      this.API.post("/save-comment",{
        "userid": userid,
        "bookid": bookid,
        "comment_date": comment_date,
        "comment": comment
      }).subscribe(data => {
        if (data.statusCode == 200) {
          Swal.fire("Success", data.devMessage, "success")
          this.ta_comment = ""
          this.getComments()
        }
      },
        (error: any) => {
          console.log(error)
        }
      )
    }
  }

  getComments(){
    var bookid = this.key
    this.API.post("/get-comments", {
      "bookid": bookid
    }).subscribe(data => {
      if (data.itemCount !=0) {
        this.book_comments = data.devMessage
      }
    },
      (error: any) => {
        console.log(error)
      }
    )
  }

  borrowBook(){
    var bookid = this.key
    var checked_out_by_id = this.user_logged_in[0].id
    var checked_out_date = moment().format("YYYY-MM-DD")

    if (this.status !="Available"){
      Swal.fire("Oops","The book is not available","warning")
    }
    else{
      this.API.post("/borrow-book", {
        "status":"Checked Out",
        "checked_out_by_id": checked_out_by_id,
        "checked_out_date": checked_out_date,
        "bookid": bookid,
      }).subscribe(data => {
        if (data.statusCode == 200) {
          Swal.fire("Success",data.devMessage,"success")
          this.ViewBook.hide()
          this.getBooks()
        }
      },
        (error: any) => {
          console.log(error)
        }
      )
    }
  }

}
