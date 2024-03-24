import axios from 'axios'

var token = null
/**AJAX */
function get(url, data, cb) {
  let headers = null
  if (token !== null) {
    headers = {
      Authorization: 'Bearer ' + token
    }
  }
  axios({
    method: 'get',
    url: url,
    params: data,
    headers: headers,
  }).then(function (res) {
    cb(res.data)
  }).catch(function (err) {
    cb(err.code)
  });
}
function post(url, data, cb) {
  let headers = null
  if (token !== null) {
    headers = {
      Authorization: 'Bearer ' + token
    }
  }
  axios({
    method: 'post',
    url: url,
    data: data,
    headers: headers,
  }).then(function (res) {
    cb(res.data)
  }).catch(function (err) {
    cb(err.code)
  });
}

export function getVideoList(sort, index, date, cb) {
  let data = {
    sort: sort,
    rating: 'all',
    page: index,
    date: date,
    limit: 32
  }
  get(api + '/videos', data, (res) => {
    cb(res)
  })
}