import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCardComponent } from './components/shared/product-card/product-card.component';
import { ProductSliderComponent } from './components/shared/product-slider/product-slider.component';
import { register } from 'swiper/element/bundle';
import { HomeComponent } from './pages/home/home.component';
import { ButtonComponent } from './components/shared/button/button.component';
import { ProductsComponent } from './pages/products/products.component';
import { DetailsComponent } from './pages/details/details.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { BackgroundComponent } from './components/shared/background/background.component';
import { DetailsCardComponent } from './components/details-card/details-card.component';
import { AccordionComponent } from './components/shared/accordion/accordion.component';
import { AdminComponent } from './pages/admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PanelAddProductComponent } from './components/panel-add-product/panel-add-product.component';
import { PanelUpdateProductComponent } from './components/panel-update-product/panel-update-product.component';
import { PanelDeleteProductComponent } from './components/panel-delete-product/panel-delete-product.component';
import { HttpClientModule } from '@angular/common/http';
register();

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    ProductListComponent,
    ProductCardComponent,
    ProductSliderComponent,
    HomeComponent,
    ButtonComponent,
    ProductsComponent,
    DetailsComponent,
    NotFoundComponent,
    BackgroundComponent,
    DetailsCardComponent,
    AccordionComponent,
    AdminComponent,
    PanelAddProductComponent,
    PanelUpdateProductComponent,
    PanelDeleteProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
