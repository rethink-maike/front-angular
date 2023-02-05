import { Component, OnInit } from '@angular/core';
import { IComics, IResponseData } from 'src/app/core/interfaces/comics.interface';
import { HomeService } from './home.service';
import { PageEvent } from '@angular/material/paginator';
import { PaginatorService } from './../../core/services/paginator.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  public dataCharacters: IComics[];
  public paginator: PageEvent;

  constructor(
    private homeService: HomeService,
    private paginatorService: PaginatorService
  ) {
    this.paginator = this.paginatorService.pagEvent;
  }

  ngOnInit(): void {
    this.getPaginator();
  }

  public callbackFilterElement(element: string): void {
    if (element.length === 0) {
      return this.getCharactersMarvel(0);
    }

    this.getCharactersMarvel(0, element);
  }

  public handlePageEvent(e: PageEvent): void {
    this.paginatorService.set(e);
  }

  private getPaginator(): void {
    this.paginatorService.setPagEvent$.subscribe((result: PageEvent) => {
      if (result) {
        this.paginator = result;
        this.getCharactersMarvel(this.paginator.pageSize * this.paginator.pageIndex)
      }
    })
  }

  private getCharactersMarvel(offset: number, name?: string): void {
    this.homeService.getCharactersMarvel(this.paginator.pageSize, offset, name).subscribe((response: IResponseData) => {
      this.paginator.length = response.total;
      this.dataCharacters = response.results;
    })
  }

}
