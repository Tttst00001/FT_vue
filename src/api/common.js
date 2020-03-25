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
    url: 'http://localhost:5000/stock',
    method: 'post',
    data
  })
}

export function moneyflow (data) {
  return request({
    url: 'http://localhost:5000/moneyflow',
    method: 'post',
    data
  })
}
