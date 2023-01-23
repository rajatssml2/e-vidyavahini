import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl:any = environment.baseUrl;
  constructor(private http: HttpClient) { }

  createSubject(url: any, postData:any): Observable<any> {
    return this.http.post(this.baseUrl+url, postData)
  }
  getSubjectList(url: any): Observable<any> {
    return this.http.get(this.baseUrl+url)
  }
  getEmpById(url: any): Observable<any> {
    return this.http.get(this.baseUrl+url)
  }
  updateSubject(url: any, postData:any): Observable<any> {
    return this.http.put(this.baseUrl+url, postData)
  }
  deleteSubject(url: any): Observable<any> {
    return this.http.delete(this.baseUrl+url)
  }
}
