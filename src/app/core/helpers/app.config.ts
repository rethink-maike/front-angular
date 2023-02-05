import { environment } from '../../../environments/environment';

export class AppConfig {
  static readonly API_SERVER: string = environment.urlBase;
  static readonly API_KEY_PUBLIC: string = environment.publicKey;
  static readonly API_KEY_PRIVATE: string = environment.privateKey;
}
