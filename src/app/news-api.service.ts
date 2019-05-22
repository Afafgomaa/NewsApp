import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
api_key:any = 'e0791856e3aa4d5e9befa5e64f68f89b';
  constructor(private http:HttpClient) { }

  initResource() {
   return this.http.get('https://newsapi.org/v2/sources?language=en&apiKey='+ this.api_key);

  }
  initArticle() {
    return this.http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey='+ this.api_key);
  }
  getArticleByid(source:string){
    return this.http.get('https://newsapi.org/v2/top-headlines?sources='+source+'&apiKey=' +this.api_key);
    }
}
