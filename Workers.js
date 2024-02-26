export default {
  async fetch(request, env) {
    let url = new URL(request.url);

    // 当请求满足特定条件时（例如，特定路径或域名），修改请求的目标
    if (url.hostname === 'xxx.xxxx.xxxx') {
      //xxx.xxxx.xxxx是你Workers绑定的域名
      url.hostname = 'xxx.xxx.xxx';
      // 设置目标内网域名和端口
      url.port = 'xxxx';
      // 确保使用 HTTP 协议还是https
      url.protocol = 'http:';
      // 创建一个新的请求对象，并保留原始请求的所有头部
      let new_request = new Request(url, request);
      
      // 发送修改后的请求
      return fetch(new_request);
    }

    // 如果不需要特殊处理，直接转发原始请求
    return fetch(request);
  },
};
