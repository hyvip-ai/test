import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CheckBoxCompoent } from './checkbox/checkbox.component';
import { SeeHistoryButtonComponent } from './see-history-button/see-history-button.component';
import { ResultButtonComponent } from './result-button/result-button.component';

@Component({
  selector: 'app-farmer-data',
  templateUrl: './farmer-data.component.html',
  styleUrls: ['./farmer-data.component.scss'],
})
export class FarmerDataComponent {
  data = [];
  constructor(private aroute: ActivatedRoute) {
    if (this.aroute.params['_value']['farmer_name']) {
      this.temp_data[0]['name'] = this.aroute.params['_value']['farmer_name'];
      for (var i = 0; i < 100; i++) {
        this.data.push(this.temp_data[0]);
      }
      this.settings.columns['result'] = {
        type: 'custom',
        title: 'Result',
        filter: false,
        renderComponent: ResultButtonComponent,
      };
    } else {
      for (var i = 0; i < 6; i++) {
        this.data.push({
          name: 'Farmer ' + (i + 1),
          phoneNo: '9002549769',
        });
      }
      this.settings.columns['result'] = {
        type: 'text',
        title: 'Result',
        filter: false,
      };
    }
  }

  settings = {
    actions: {
      delete: false,
      add: false,
      edit: false,
    },
    columns: {
      name: {
        type: 'custom',
        title: "Farmer's Name",
        renderComponent: CheckBoxCompoent,
        filter: false,
      },
      phoneNo: {
        title: 'Phone No.',
        filter: false,
      },
      message: {
        type: 'html',
        title: 'Message',
        filter: false,
        valuePrepareFunction: () => {
          return `<i class="fa fa-envelope"></i>`;
        },
      },
      history: {
        type: 'custom',
        title: 'Scan History',
        filter: false,
        renderComponent: SeeHistoryButtonComponent,
      },
      machine: {
        title: 'Machine',
        filter: false,
      },
      crop: {
        title: 'Crop',
        filter: false,
      },
      timeOfScan: {
        title: 'Time of Scan',
        filter: false,
      },
      location: {
        title: 'Location',
        filter: false,
      },
    },
  };

  temp_data = [
    {
      name: 'Farmer 1',
      phoneNo: '9002549769',
      machine: 1,
      crop: 'Mazie',
      timeOfScan: '2.16pm, 24/02/2021',
      location: 'Muraripur, colaba',
    },
  ];
}
