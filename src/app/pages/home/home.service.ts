import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { SnackBarService } from './../../core/services/snackbar.service';
import { IComics, IResponse, IResponseData } from './../../core/interfaces/comics.interface';
import { AppConfig } from 'src/app/core/helpers/app.config';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MarvelService } from './../../core/services/marvel.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  protected baseUrl: string = AppConfig.API_SERVER;
  private urlHash: string;

  // Expor dados API
  private getCharactersSubject$ = new BehaviorSubject(null);
  public getCharacters$ = this.getCharactersSubject$.asObservable();


  constructor(
    private http: HttpClient,
    private snackBarService: SnackBarService,
    private marvelService: MarvelService,
  ) {
    this.urlHash = this.marvelService.generatorUrl();
  }

  public getCharactersMarvel(limit: number, offset: number, name?: string): Observable<IResponseData> {
    const params = this.setParamsPaginator(limit, offset, name);

    return this.http.get<IComics>(`${this.baseUrl}/characters${this.urlHash}`, params)
      .pipe(
        tap((result: any) => {
          if (result?.code === 200) {
            this.getCharactersSubject$.next(result.data?.results);
            return;
          }

          this.snackBarService.error('Erro na chamada da API', 5000)
        }),
        map((result: IResponse) => {
          return result.data;
        })
      )
  }

  public getComicMarvel(url: string): Observable<any> {
    return this.http.get<IComics>(`${url}${this.urlHash}`)
      .pipe(
        tap((result: any) => {
          if (result?.code === 200) {
            return;
          }

          this.snackBarService.error('Erro na chamada da API', 5000)
        }),
        map((result: IResponse) => {
          return result.data.results[0]?.thumbnail;
        })
      )
  }

  private setParamsPaginator(limit: number, offset: number, name?: string) {
    let params = new HttpParams();
    params = params.set('limit', String(limit))
    params = params.set('offset', String(offset))

    if (name) {
      params = params.set('name', name)
    }

    return { params }
  }
}
