class Response {
  constructor(data, token, status) {
    this.status = true || status;
    this.data = data || {};
    this.token = token || {};
  }
}

module.exports = Response;
