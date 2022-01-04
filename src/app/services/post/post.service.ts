import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {Router} from "@angular/router";
import {Post} from "../../models/posts";
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts: Post[] = [];
  post: Post | {} = {};

  constructor(private firestore: AngularFirestore, private router: Router) {
  }

  createNewPost(title: string, postText: string, tech: string) {
    return this.firestore.collection('posts').add({ title, postText, tech }).then((docRef) => this.posts.push({ title, postText, tech, id: docRef.id }))
  }

  setComment(comment: string, postId: string) {
    return this.firestore.collection('posts').doc(postId).update({comments: firebase.firestore.FieldValue.arrayUnion(comment)})
  }

  getAllPosts() {
   this.firestore.collection('posts').get().subscribe(snapshot => {
     this.posts = snapshot.docs.map(doc => {
      return {...(doc.data() as object), id: doc.id};
     })
    });
  }

  openPostMore(postId?: string): void {
    this.router.navigate([`/post/${postId}`]);
  }

  getPost(postId: string) {
    return this.firestore.collection('posts').doc(postId).get()
  }
}
