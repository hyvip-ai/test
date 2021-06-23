import { Component, Input, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import "jquery";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit, OnDestroy {
  @Input() size;
  @Input() left;
  @Input() top;

  style;

  yellowStates = [
    'Karnataka',
    'Maharashtra',
    'Madhya Pradesh',
    'Rajasthan',
    'Uttar Pradesh',
    'Haryana',
    'Gujarat',
  ];

  mark = ['Pune'];
  offsetY = 0;
  offsetX = 0;

  ngOnChanges(changes: SimpleChanges) {
    this.style = 'height: ' + this.size + ';';
    setTimeout(() => {
      if (this.left) {
        $('#district')[0].style.left = this.left;
        $('#chart')[0].style.left = this.left;
        if (this.left != '20px') {
          var markerList = $('img.marker');
          for (var i = 0; i < markerList.length; i++) {
            var value = markerList[i].style.left.substring(
              0,
              markerList[i].style.left.length - 2
            );
            var value2 = this.left.substring(0, this.left.length - 2);
            markerList[i].style.left = +value + +value2 - 20 + 'px';
          }
        }
      }

      if (this.top) {
        $('#district')[0].style.top = this.top;
        $('#chart')[0].style.top = this.top;
        if (this.top != '20px') {
          var markerList = $('img.marker');
          for (var i = 0; i < markerList.length; i++) {
            var value = markerList[i].style.top.substring(
              0,
              markerList[i].style.top.length - 2
            );
            var value2 = this.top.substring(0, this.top.length - 2);
            markerList[i].style.top = +value + +value2 - 20 + 'px';
          }
        }
      }
    }, 300);
  }

  ngOnInit(): void {
    this.style = 'height: ' + this.size + ';';

    if (this.size == '650px') {
      this.offsetY = 10;
      this.offsetX = 0;
    }
    var url = '../../../../assets/images/marker/marker.png';
    var svg = document.getElementById('district');
    var mark = this.mark;
    var yellowStates = this.yellowStates;
    var offsetY = this.offsetY;
    var offsetX = this.offsetX;
    setTimeout(function () {
      for (var i = 0; i < mark.length; i++) {
        if (this.left) {
          $('#district')[0].style.left = this.left;
          $('#chart')[0].style.left = this.left;
        }

        if (this.top) {
          $('#district')[0].style.top = this.top;
          $('#chart')[0].style.top = this.top;
        }
        var image = new Image();
        image.src = url;
        image.className = 'marker';
        image.style.position = 'absolute';
        image.style['z-index'] = 2;
        image.style.height = '24.5px';
        image.style.width = '12.5px';
        var position = $('#' + mark[i] + '')[0].getBoundingClientRect();
        image.style.top = position.y - offsetY + 'px';
        image.style.left = position.x - offsetX + 'px';
        $('body')[0].prepend(image);
      }

      for (var i = 0; i < yellowStates.length; i++) {
        document.getElementById(yellowStates[i])['style']['fill'] =
          'rgb(255,213,103)';
      }
    }, 200);
  }

  ngOnDestroy(): void {
    var markerList = $('img.marker');
    for (var i = 0; i < markerList.length; i++) {
      markerList[i].remove();
    }
  }
}
