import { Component } from '@angular/core';
import { NewsApiService } from './news-api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  title = 'NewsApp';
  Articles:Array<any>;
  Sources:Array<any>;
  constructor(private newsapi:NewsApiService){

  }
  ngOnInit(){
    // load articles
    this.newsapi.initArticle().subscribe(data => this.Articles = data['articles']);
    // load news resource
    this.newsapi.initResource().subscribe(data => this.Sources = data['sources']);
  }

  SearchArticles(source){
    this.newsapi.getArticleByid(source).subscribe(data => this.Articles = data['articles']);
  }
}
