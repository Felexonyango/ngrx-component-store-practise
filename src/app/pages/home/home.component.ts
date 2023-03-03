import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from '../../components/register/register.component';
import { PostService } from 'src/app/service/posts.service';
import { Posts } from 'src/app/model/posts';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RegisterComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
 
  posts!: Posts[];
  subscription = new Subscription();
  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.getPosts();
  }
  getPosts() {
    this.subscription.add(
      this.postService.getusers().subscribe({
        next: (res) => {
          this.posts = res;
          console.log(this.posts);
        },
      })
    );
  }
}
