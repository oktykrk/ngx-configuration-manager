import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigurationManagerService } from './services/configuration-manager.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
    ],
    providers: [
        ConfigurationManagerService
    ]
})
export class ConfigurationManagerModule { }
