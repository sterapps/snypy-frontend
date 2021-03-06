import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Store } from "@ngxs/store";
import { UpdateSnippetFilter } from "../../state/snippet/snippet.actions";


export interface Filter {
  area: 'main' | 'labels' | 'languages' | 'members';
  value: string | number;
}


@Injectable()
export class ActiveFilterService {

  constructor(private store: Store) {
  }

  private initialFilter: Filter = {
    area: 'main',
    value: 'all',
  };
  filterUpdated = new BehaviorSubject<Filter>(this.initialFilter);

  updateFilter(area: 'main' | 'labels' | 'languages' | 'members', value: string | number) {
    this.filterUpdated.next({
      area: area,
      value: value,
    });

    console.log(area);

    switch (area) {
      case 'main':
        switch (value) {
          case 'all':
            this.store.dispatch(new UpdateSnippetFilter({}))
            break;
          case 'favorites':
            console.log('Not implemented');
            break;
          case 'unlabeled':
            this.store.dispatch(new UpdateSnippetFilter({'labeled': 'False'}));
            break;
          case 'public':
            this.store.dispatch(new UpdateSnippetFilter({'visibility': 'PUBLIC'}));
            break;
          case 'private':
            this.store.dispatch(new UpdateSnippetFilter({'visibility': 'PRIVATE'}));
            break;
          case 'shared-by-me':
            console.log('Not implemented');
            break;
          case 'shared-with-me':
            console.log('Not implemented');
            break;
          default:
            console.log('Undefined main area value" ' + value);
            break;
        }
        break;
      case 'labels':
        this.store.dispatch(new UpdateSnippetFilter({'labels': value}));
        break;
      case 'languages':
        this.store.dispatch(new UpdateSnippetFilter({'files__language': value}));
        break;
      case 'members':
        this.store.dispatch(new UpdateSnippetFilter({'user': value}));
        break;
      default:
        console.log('Undefined filter area" ' + area);
        break;
    }
  }
}
