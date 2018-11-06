import axios from 'axios';
import { DeviceModel } from '@/models/device.model';
const apiUrl = 'http://localhost:8000/';

class DeviceService {

  public connect(data: DeviceModel) {
    return this.postData('router/connectToDevice', data);
  }

  public ping(data: any) {
    return this.postData('router/ping', data);
  }

  private postData(url: string, data: any): any {
    return axios.post(apiUrl + url, {
      headers: {
        'Content-Type': 'application/json',
      },
      data,
    });
  }

  private getData(url: string, data: any): any {
    return axios.get(apiUrl + url, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

}

export const deviceService = new DeviceService();
