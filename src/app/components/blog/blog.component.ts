import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { BlogPost } from 'src/app/models/blog-post';
import { AllBlogs } from 'src/app/models/all-blogs';
import {NgbModal, NgbModalOptions, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  closeResult: string;
  modalOptions:NgbModalOptions;
  constructor(public blogService: BlogService, private modalService: NgbModal) {
    this.modalOptions = {
      backdrop:'static',
      backdropClass:'customBackdrop'
    }
   }

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    this.getAllBlogs();
  }

  openBlog(postId: string) {
    this.blogService.getBlogPost(postId).subscribe((post: BlogPost) => {
        this.blogService.blogPost = post;
    });
  }

  getAllBlogs() {
    this.blogService.getBlogs().subscribe((blgs: any) => {
      this.blogService.allBlogs = blgs;
    });
  }

  setBgImg(idx: number) {
    let styles = {
      'background-image': `url(${this.blogService.allBlogs.blogs[idx].image})`
    };
    return styles;
  }

  open(content) {
    this.modalService.open(content, this.modalOptions).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
