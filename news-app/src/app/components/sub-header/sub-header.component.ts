import {Component, OnInit} from '@angular/core';
import { SOURCES } from '../../mock/mock-source-list';
import {TitleService} from "../../services/title/title.service";

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss']
})
export class SubHeaderComponent implements OnInit {

  sources = SOURCES;

  constructor(private titleService: TitleService) { }

  ngOnInit() {
  }

  filter(keywords: string) {
    keywords = keywords.trim();
    if (!keywords) { return; }
    console.log(`News filtered by keywords: ${keywords}`);
  }

  addArticel() {
    console.log(`Article added`);
  }

  onChangeOnlyMyNews() {
    console.log(`Displays news created by me`);
  }

  onChangeSource(sourceName: string) {
    console.log(`Select source: ${sourceName}`);
    this.titleService.setTitle(sourceName);

  }
}
