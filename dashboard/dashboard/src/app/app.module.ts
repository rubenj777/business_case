import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { GeneralComponent } from './general/general.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';
import { NbBasketsComponent } from './nb-baskets/nb-baskets.component';
import { NbOrdersComponent } from './nb-orders/nb-orders.component';
import { NbNewClientsComponent } from './nb-new-clients/nb-new-clients.component';
import { NbVisitsComponent } from './nb-visits/nb-visits.component';
import { AverageBasketValueComponent } from './average-basket-value/average-basket-value.component';
import { BasketRecurrenceComponent } from './basket-recurrence/basket-recurrence.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { TotalSalesComponent } from './total-sales/total-sales.component';

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
    BasketRecurrenceComponent,
    LineChartComponent,
    TotalSalesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    NgChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }
}
