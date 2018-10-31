import axios from 'axios';

const apiUrl = 'localhost:8080/';

class RouterService {
  constructor() {
    // ctor
  }

  public connect(value: string) {
    return axios.get(apiUrl + 'router/' + 'connect/' + value);
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

export const routerService = new RouterService();
