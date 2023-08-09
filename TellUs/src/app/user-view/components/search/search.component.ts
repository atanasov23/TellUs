import { Component } from '@angular/core';
import { PublicationService } from '../../services/publication.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  constructor(private pubService: PublicationService){}

  searchResult: any = [];

  searchMessage: string = '';

  search(form: any){

    const value = form.value['search-field'];

    this.pubService.search(value).subscribe(res => {

      this.searchResult = res;
    });

    this.searchMessage = 'Няма резултати...'
    
  }
}
