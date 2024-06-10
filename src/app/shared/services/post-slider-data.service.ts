import { Injectable } from '@angular/core';
import {IEmployeePost, IPost} from '../interfaces';
import {employeePosts, posts} from '../staticData';

@Injectable({
  providedIn: 'root'
})
export class PostSliderDataService {
  getPosts(): IPost[] {
    return posts;
  }

  getEmployeeData(): IEmployeePost[] {
    return employeePosts;
  }
}
