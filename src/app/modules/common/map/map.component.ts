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

 @Input() yellowStates = [];
 @Input() previous = [];


  @Input() mark = [];
  offsetY = 0;
  offsetX = 0;
  previousmark:any = null;

  ngOnChanges(changes: SimpleChanges) {
    console.log(this.previousmark)
    console.log(this.mark)
      if(this.previousmark){
        
          for (var i = 0; i < this.previousmark.length; i++) {
        document.getElementById(this.previousmark[i])['style']['fill'] =
          '#ebebeb';
         
      }
      }

    for (var i = 0; i < this.mark.length; i++) {
        document.getElementById(this.mark[i])['style']['fill'] =
          'rgb(255,213,103)';
          
      }
      this.previousmark = this.mark;
     
  }

  ngOnInit(): void {
    this.previousmark = this.mark;
    // console.log('firsttime ',this.size)
    this.style = 'height: ' + this.size + ';';

    if (this.size == '650px') {
      this.offsetY = 10;
      this.offsetX = 0;
    }
    // var districts = document.querySelectorAll("path");
    // console.log(districts)
    // var url = '../../../../assets/images/marker/marker.png';
    // var svg = document.getElementById('district');
    // var mark = this.mark;
    // var yellowStates = this.yellowStates;
    // var offsetY = this.offsetY;

    // var offsetX = this.offsetX;
    //  console.log(`offsety:${offsetY}`)
    //  console.log(`offsetx:${offsetX}`)
    // setTimeout(function () {
    //   for (var i = 0; i < mark.length; i++) {
    //     if (this.left) {
    //       $('#district')[0].style.left = this.left;
    //       $('#chart')[0].style.left = this.left;
    //     }

    //     if (this.top) {
    //       console.log(this.top)
    //       $('#district')[0].style.top = this.top;
    //       $('#chart')[0].style.top = this.top;
    //     }
    //     var image = new Image();
    //     image.src = url;
    //     image.className = 'marker';
    //     image.style.position = 'absolute';
    //     image.style['z-index'] = 2;
    //     image.style.height = '24.5px';
    //     image.style.width = '12.5px';
    //     var position = $('#' + mark[i] + '')[0].getBoundingClientRect();
    //     image.style.top = position.y - offsetY + 'px';
    //     image.style.left = position.x - offsetX + 'px';
    //     $('body')[0].prepend(image);
    //   }

    //   for (var i = 0; i < yellowStates.length; i++) {
    //     document.getElementById(yellowStates[i])['style']['fill'] =
    //       'rgb(255,213,103)';
    //   }
    // }, 200);
       for (var i = 0; i < this.mark.length; i++) {
        document.getElementById(this.mark[i])['style']['fill'] =
          'rgb(255,213,103)';
      
      }
  }

  ngOnDestroy(): void {
    var markerList = $('img.marker');
    for (var i = 0; i < markerList.length; i++) {
      markerList[i].remove(); 
    }
  }
}
