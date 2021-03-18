## All about js

#### [Array related](docs/array.md)

#### FE foundation

1. [CSS concepts](docs/css.md)
2. Regex
3. DOM BOM
4. Closure. this 四个原则
5. throttle, bounce
6. Array

#### Es6 Ts DSL

1. Promise 手写
2. Async/ Await
3. Proxy
4. TS overload, Generic

#### React

1. HOC. Render props. Life cycle
2. vue double bind
3. vdom DFS
4. diff tree
5. Router (hash push state) 手写
6. Redux
7. react fiber

#### Node

1. login
2. store
3. concurrency
4. cache
5. middleware (abstract)
6. PRC
7. 消息队列

#### Engeeneer

1. webpack plugin (getting some setting from)
2. yarn packages/ lerna

#### Network

1. http - cache control expire 200 304, etag, last modify 304

    200 + 304

    cookies/set-cookie, location transfer encoding bigpipe

2. optimise

    react memo, react lazy loading

3. Ssr （退化）

#### SVG Canvas

文档

函数式

#### 动态规划 搜索 排序

const dp = arr =>{

let res

For

for

}

#### Http request

1. DNS - GET IP

    Find by browser cache -> system cache -> hosts -> domain server

    1.2 why http is based on tcp

    Ip/tcp/http

2. Find server and do the three hands shake

3. Start TCP connect and Send HTTP request

4. Get HTTP response get html

5. Browser -> html

6. Render

7. Close TCP

#### HTTP cache control

1. Two types of cache,

    1.1 status code: 200 / size : from cache

    ​ expires : server time

    ​ Cache-Control: 3600 advance than expires

#### Fetch vs Axios

##### Fetch

​ Window.fetch, replacement of `xmlHttpRequest`, it is similar to XHR as a ES standard -- whatwg

###### Pros

vs xhr fetch support promise, semantically

###### Cons

​ 400 and 500 are all success, no reject

​ fetch not using cookie default, {credential: include}

​ cannot cancel request

​ cannot get the process of a request (progress bar )

##### Axios

Based on promise, support node js and browser and using promise approach, abstract of XHR

###### Pros

Based on XHR, and support Promise

Protect csrf

Support some concurrent request (promise.all)

Support node

拦截

请求转换

Cancel request

Convert json automatically

#### Security

##### XSS Cross site script

Cross site script -- execute js in other's browsers

Script in `innerHtml` is not working

Sample img tag with `onerror="something"`

Third party also has risks, audit

###### Prevention

Sanitize !

#### CRSF cross site request forgery
