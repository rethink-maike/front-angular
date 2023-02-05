import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IComics, IComicsTable, IItens } from '../../../../app/core/interfaces/comics.interface';
import { MatDialog } from '@angular/material/dialog';
import { ModalCharactersComponent } from '../modal-characters/modal-characters.component';

@Component({
  selector: 'app-table-characters',
  templateUrl: './table-characters.component.html',
  styleUrls: ['./table-characters.component.scss']
})
export class TableCharactersComponent implements OnChanges {

  public displayedColumns: string[] = ['characters', 'series', 'events'];
  public dataSource: MatTableDataSource<IComicsTable[] | any>;

  @Input() dataCharacters: IComics[];

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnChanges(): void {
    this.getTableCharacters();
  }

  public openModalDetails(row: IComics) {
    return this.dialog.open(ModalCharactersComponent, {
      data: row
    });
  }

  private mapArrayItems(array: IItens[]) {
    return array.map((result: IItens) => {
      return result.name
    }).slice(0, 3);
  }

  private getTableCharacters() {
    if (this.dataCharacters) {
      this.dataSource = new MatTableDataSource(this.dataCharacters.map((result: IComics) => {
        return {
          ...result,
          name: result.name,
          seriesFormat: this.mapArrayItems(result.series.items),
          eventsFormat: this.mapArrayItems(result.events.items),
          thumbnail: `${result.thumbnail.path}.${result.thumbnail.extension}`
        }
      }))
    }
  }
}
