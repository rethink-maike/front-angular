import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IComics, IDataSeries, IThumbnail } from '../../../../app/core/interfaces/comics.interface';
import { HomeService } from './../home.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-modal-characters',
  templateUrl: './modal-characters.component.html',
  styleUrls: ['./modal-characters.component.scss']
})
export class ModalCharactersComponent implements OnInit {

  public dataSeries: IDataSeries[] = [];

  constructor(
    public dialogRef: MatDialogRef<ModalCharactersComponent>,
    private homeService: HomeService,
    private sanitizer: DomSanitizer,
    @Inject(MAT_DIALOG_DATA) public data: IComics
  ) { }

  ngOnInit(): void {
    this.getSeriesImages()
  }

  private async getSeriesImages() {
    for await (const serie of this.data.series.items) {
      this.homeService.getComicMarvel(serie.resourceURI).subscribe((result: IThumbnail) => {
        this.dataSeries.push({
          name: serie.name,
          path: `${result.path}.${result.extension}`
        })
      })
    }
  }

  public getSantizeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

}
