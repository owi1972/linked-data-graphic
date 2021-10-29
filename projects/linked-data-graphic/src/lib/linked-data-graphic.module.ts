import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PanZoomDirectiveModule } from '../../../pan-zoom-directive/src/public-api';
import { SvgIconModule } from '../../../icon/src/public-api';
import { LinkedDataGraphicComponent } from './canvas.component';
import { BoxSizeListenerDirective } from './box-size-listener.directive';
import { LongPressDirective } from './long-press.directive';
import { InfoPanelComponent } from './info-panel-component/info-panel.component';

@NgModule({
  declarations: [
    LinkedDataGraphicComponent,
    BoxSizeListenerDirective,
    LongPressDirective,
    InfoPanelComponent],
  imports: [
    BrowserModule, DragDropModule, PanZoomDirectiveModule,
    SvgIconModule
  ],
  exports: [LinkedDataGraphicComponent, InfoPanelComponent]
})
export class LinkedDataGraphicModule { }
