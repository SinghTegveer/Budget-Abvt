import { Component } from '@angular/core';
import {STYLE_COLOURS} from '../styles/styles'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-summary-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './summary-table.component.html',
  styleUrl: './summary-table.component.css',
})
export class SummaryTableComponent {
  
  containerColour: any;
  summaryTablesHeaderRow: any;
  summaryTablesTitleColumn: any;
  summaryTablesDataColumn: any;

  ngOnInit() {
    this.containerColour = {
      'background-color': STYLE_COLOURS.summary_section_background_colour,
      'color': STYLE_COLOURS.summary_tables_text_colour,
    };
    this.summaryTablesHeaderRow = {
      'background-color': STYLE_COLOURS.summary_tables_header_background_colour
    };
    this.summaryTablesTitleColumn = {
      'background-color': STYLE_COLOURS.summary_tables_title_column_background_color
    };
    this.summaryTablesDataColumn = {
      'background-color': STYLE_COLOURS.summary_tables_data_column_background_color,
    };

  }
}
