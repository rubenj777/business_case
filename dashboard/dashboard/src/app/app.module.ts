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
import { NbBasketsComponent } from './nb-baskets/nb-baskets.component';
import { NbOrdersComponent } from './nb-orders/nb-orders.component';
import { NbNewClientsComponent } from './nb-new-clients/nb-new-clients.component';
import { NbVisitsComponent } from './nb-visits/nb-visits.component';
import { AverageBasketValueComponent } from './average-basket-value/average-basket-value.component';
import { OrdersInfosComponent } from './orders-infos/orders-infos.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { TotalSalesComponent } from './total-sales/total-sales.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarComponent } from './calendar/calendar.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BasketInfosComponent } from './basket-infos/basket-infos.component';

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
    CalendarComponent,
    BasketInfosComponent,
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
