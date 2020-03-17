import { CommonModule } from '@angular/common';
import {
  NgModule,
  Optional,
  SkipSelf,
  ModuleWithProviders
} from '@angular/core';
import { AppRoutingModule } from '@core/routing/app-routing.module';
import { HeaderComponent } from '@core/components/header';
import { AppService } from '@domain/app';
import { DI } from '@app-services/di';


@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [
    HeaderComponent
  ],
  providers: [

  ],
  exports: [
    CommonModule,
    AppRoutingModule,
    HeaderComponent
  ]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        {
          provide: AppService,
          useValue: DI.getService(AppService)
        }
      ]
    };
  }

  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule has already been loaded. You should only '
        + 'import Core modules in the AppModule only.');
    }
  }
}
