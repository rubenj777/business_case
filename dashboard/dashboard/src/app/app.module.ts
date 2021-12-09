import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { GeneralComponent } from './general/general.component';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';
import { NbBasketsComponent } from './general/main/nb-baskets/nb-baskets.component';
import { NbOrdersComponent } from './general/main/nb-orders/nb-orders.component';
import { NbNewClientsComponent } from './general/main/nb-new-clients/nb-new-clients.component';
import { NbVisitsComponent } from './general/main/nb-visits/nb-visits.component';
import { AverageBasketValueComponent } from './general/main/average-basket-value/average-basket-value.component';
import { OrdersInfosComponent } from './general/main/orders-infos/orders-infos.component';
import { LineChartComponent } from './general/main/line-chart/line-chart.component';
import { TotalSalesComponent } from './general/main/total-sales/total-sales.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SideBarComponent } from './general/side-bar/side-bar.component';
import { MainComponent } from './general/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GeneralComponent,
    NbOrdersComponent,
    NbBasketsComponent,
    NbNewClientsComponent,
    NbVisitsComponent,
    AverageBasketValueComponent,
    OrdersInfosComponent,
    LineChartComponent,
    TotalSalesComponent,
    SideBarComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    NgChartsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSidenavModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }
}
