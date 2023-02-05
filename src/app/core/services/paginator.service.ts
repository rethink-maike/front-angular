import { Injectable } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaginatorService {

  public pagEvent: PageEvent = {
    length: 0,
    pageSize: 10,
    pageIndex: 0,
    previousPageIndex: 0
  };;

  // Expor dados Paginação
  private setPagEventSubject$ = new BehaviorSubject(this.pagEvent);
  public setPagEvent$ = this.setPagEventSubject$.asObservable();

  constructor() { }

  public set(e: PageEvent): void {
    this.pagEvent.length = e.length;
    this.pagEvent.pageSize = e.pageSize;
    this.pagEvent.pageIndex = e.pageIndex;
    this.setPagEventSubject$.next(e);
  }


}
