const url = require('url');

const myUrl = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active');

//serialized  url 
console.log(myUrl.href);
console.log(myUrl.toString());

//gets host
console.log(myUrl.host);

//gets hostname(no port name)
console.log(myUrl.hostname);

//path name
console.log(myUrl.pathname);

//serialized query
console.log(myUrl.search);

//param object
console.log(myUrl.searchParams);

//add params
myUrl.searchParams.append('abc', '123');

//loop through params
myUrl.searchParams.forEach((value,name) => console.log(`${value}: ${name}`));
