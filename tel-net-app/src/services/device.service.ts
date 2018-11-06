import axios from 'axios';
import { DeviceModel } from '@/models/device.model';
const apiUrl = 'http://localhost:8000/';

class DeviceService {

  public postData(url: string, data: any): any {
    return axios.post(apiUrl + url, {
      headers: {
        'Content-Type': 'application/json',
      },
      data,
    });
  }

  public getData(url: string, data: any): any {
    return axios.get(apiUrl + url, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  public connect(data: DeviceModel) {
    return this.postData('router/connectToDevice', data);
  }

}

export const deviceService = new DeviceService();
