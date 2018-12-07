# static

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### nginx配置

```
# HTTPS server config.

server {
   listen       443;
	server_name www.hd.com;
	ssl                  on;
	ssl_certificate      E:\workspace\server.crt;
	ssl_certificate_key  E:\workspace\server.key;
	ssl_session_timeout  5m;
	ssl_protocols  SSLv2 SSLv3 TLSv1;
	ssl_ciphers  HIGH:!aNULL:!MD5;
	ssl_prefer_server_ciphers   on;
  
  location /feapi/ {
    #这里需要配置后端的端口号
    proxy_pass https://127.0.0.1:8080/feapi/;
  }

  location / {
    # root /home/nb09/Dev/hub-static/dist;
    # index index.html index.htm;
    # try_files $uri /index.html;
    proxy_pass http://127.0.0.1:8081;
  }
}

```
