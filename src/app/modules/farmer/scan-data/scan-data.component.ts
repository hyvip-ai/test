import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-scan-data',
  templateUrl: './scan-data.component.html',
  styleUrls: ['./scan-data.component.scss'],
})
export class ScanDataComponent {
  constructor(private aroute: ActivatedRoute) {
    console.log(this.aroute.params);
    for (var i = 0; i < 100; i++) {
      this.data.push(this.temp_data[0]);
    }
  }

  data = [];

  settings = {
    actions: {
      delete: false,
      add: false,
      edit: false,
    },
    columns: {
      raw_image: {
        type: 'html',
        title: 'Raw Image',
        filter: false,
        valuePrepareFunction: () => {
          return `<i class="fas fa-images"></i> Image`;
        },
      },
      annotated_image: {
        type: 'html',
        title: 'Annotated Image',
        filter: false,
        valuePrepareFunction: () => {
          return `<i class="fas fa-images"></i> Image`;
        },
      },
      total_kernels: {
        title: 'Total kernels tested',
        filter: false,
      },
      total_kernels_percentage: {
        title: 'Total kernels tested(%)',
        filter: false,
      },
      fungus: {
        title: 'Kernels with fungus',
        filter: false,
      },
      fungus_percentage: {
        title: 'Kernels with fungus(%)',
        filter: false,
      },
      weevil: {
        title: 'Weevil kernels',
        filter: false,
      },
      weevil_percentage: {
        title: 'Weevil kernels(%)',
        filter: false,
      },
    },
    pager: {
      display: true,
      perPage: 10,
    },
    hideSubHeader: 'true',
  };

  temp_data = [
    {
      total_kernels: 350,
      total_kernels_percentage: 45,
      fungus: 52,
      fungus_percentage: 45,
      weevil: 52,
      weevil_percentage: 52,
    },
  ];
}
