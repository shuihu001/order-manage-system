import request from '../network/request';

export const fetchData = completeState => {
    return request({
        url: '/api/display/goodOrder',
        method: 'post',
        params: {completeState}
    });
};
export const sendData = query => {
  return request({
    url: '/api/receive/changeOrder',
    method: 'post',
    data: query
  });
};
export const driverData= query => {
  return request({
    url: '/api/send/driverList',
    method: 'post',
    params: query
  });
};
export const changeOrderState=(id,completeState) => {
  return request({
    url:"api/receive/changeCompleteState",
    method:'post',
    data:{
      "id":id,
      "completeState":completeState
    }
  })
}
