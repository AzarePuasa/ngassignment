import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainContentComponent } from './main-content/main-content.component';
import { RegistrationComponent } from './registration/registration.component';
import { MaterialsModule } from '../materials.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, 
    MaterialsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [LayoutComponent, HeaderComponent, FooterComponent, MainContentComponent, RegistrationComponent],
  exports: [LayoutComponent]
})
export class UiModule { }
