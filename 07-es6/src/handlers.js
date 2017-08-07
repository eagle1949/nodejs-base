/*
* @Author: caijw
* @Date:   2017-08-03 16:41:06
* @Last Modified by:   caijw
* @Last Modified time: 2017-08-03 16:50:09
*/

export function homepage(request, response){
	response.setHeader("Content-Type", "text/html");
    response.end("hello world");
}

export function notFound(request, response){
	response.setHeader("Content-Type", "text/html");
    response.end("404");
}