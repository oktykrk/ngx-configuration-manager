import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigurationManagerService {
    private _config: any;
    constructor(private _httpClient: HttpClient) { }
    
    /**
    * returns configuration value of given configuration.
    * @param key configuration key
    */
    public get(key: string): any {
        return this._config[key];
    }
    
    /**
    * ex: loads app.config.{env}.json file.
    */
    public load(uri: string) {
        const __this = this;
        return new Promise<void>(function (resolve, reject) {
            __this._httpClient.get(uri).subscribe(function (res) {
                if (res) {
                    __this._config = res;
                    resolve();
                } else {
                    console.error(`ERROR => Could not load configuration .json (${uri})`);
                    reject();
                }
            });
        });
    }
}
