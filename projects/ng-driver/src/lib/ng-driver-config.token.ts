import { InjectionToken } from '@angular/core';
import { Config } from 'driver.js';

/**
 * Injection token for NgDriver configuration
 */
export const NG_DRIVER_CONFIG = new InjectionToken<Config>('NG_DRIVER_CONFIG');
