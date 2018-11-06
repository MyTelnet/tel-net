import axios from 'axios';
import { DeviceModel } from '@/models/device.model';
const apiUrl = 'http://localhost:8000/';

class DeviceService {
  constructor() {}

  public postData(url: string, data: any): any {
    return axios.post(apiUrl + url, {
      headers: {
        'Content-Type': 'application/json'
      },
      data
    });
  }

  public connect(data: DeviceModel) {
    return this.postData('router/connectToDevice', data);
  }

  public getResourceStas(value: string) {
    return axios.get(apiUrl + 'router/' + 'getStats/' + value);
  }

  public writeResourceStas(value: string) {
    return axios.post(apiUrl + 'router/' + 'writeStats/' + value);
  }

  public updateAdminPassword(value: string) {
    return axios.post(apiUrl + 'router/' + 'updatePassword/' + value);
  }

  public pingIp(value: string) {
    return axios.post(apiUrl + 'router/' + 'ping/' + value);
  }

  public getPingReport(value: string) {
    return axios.get(apiUrl + 'router/' + 'getPingReport/' + value);
  }
}

export const deviceService = new DeviceService();
