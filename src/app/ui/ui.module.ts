import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainContentComponent } from './main-content/main-content.component';
import { RegistrationComponent } from './registration/registration.component';
import { MaterialsModule } from '../materials.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserDataService } from '../service/user-data.service';
import { UserAPIService } from '../service/userapi.service';

@NgModule({
  imports: [
    CommonModule, 
    MaterialsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [LayoutComponent, HeaderComponent, FooterComponent, MainContentComponent, RegistrationComponent],
  exports: [LayoutComponent],
  providers: [UserDataService,UserAPIService],
})
export class UiModule { }
