import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BlogPost } from '../models/blog-post';
import { AllBlogs } from '../models/all-blogs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  getPost: string = 'https://wxmfru1xv8.execute-api.us-east-1.amazonaws.com/dev/blog';
  getAllBlogs: string = 'https://wxmfru1xv8.execute-api.us-east-1.amazonaws.com/dev/allBlogs';

  @Input() blogPost: BlogPost;
  @Input() allBlogs: AllBlogs;
  constructor(public httpClient: HttpClient) { }


  public getBlogPost(blogId: string) {
    try {
      return this.httpClient.get<BlogPost>(this.getPost + '?' + blogId);
    } catch(err) {
      console.log(err);
    }
  }

  public getBlogs() {
    try {
      return this.httpClient.get<any>(this.getAllBlogs);
    } catch (error) {
      console.log(error);
    }
  }
}
