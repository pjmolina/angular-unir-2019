import { Injectable } from '@angular/core';
import { ILogger } from './logger.service';

@Injectable()
export class Logger2Service implements ILogger {
  log(msg: any): void   { console.log(this.formatMessage('LOG', msg)); }
  error(msg: any): void { console.error(this.formatMessage('ERROR', msg)); }
  warn(msg: any): void  { console.warn(this.formatMessage('WARN', msg)); }

  private formatMessage(level: string, msg: string): string {
    const fecha = new Date(Date.now()).toISOString();
    return `${fecha} - ${level}: ${msg}`;
  }
}

