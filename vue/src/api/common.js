import request from '@/utils/http'

export function getFinaMainbz (data) {
  return request({
    url: '',
    method: 'post',
    data
  })
}

export function stock (data) {
  return request({
    url: 'http://121.42.229.128:8002/stock',
    method: 'post',
    data
  })
}

export function moneyflow (data) {
  return request({
    url: 'http://121.42.229.128:8002/moneyflow',
    method: 'post',
    data
  })
}

export function dividend (data) {
  return request({
    url: 'http://121.42.229.128:8002/get_dividend',
    method: 'post',
    data
  })
}

export function dividend_info (data) {
  return request({
    url: 'http://121.42.229.128:8002/get_dividend_info',
    method: 'post',
    data
  })
}

export function volume (data) {
  return request({
    url: 'http://121.42.229.128:8002/volume',
    method: 'post',
    data
  })
}