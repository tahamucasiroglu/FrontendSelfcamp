const now=new Date();
console.log(now);
console.log(typeof now);

console.log('Year:',now.getFullYear());
console.log('Month:',now.getMonth()+1);
console.log('Date:',now.getDate());
console.log('Day:',now.getDay());
console.log('Hours:',now.getHours());
console.log('Minutes:',now.getMinutes());
console.log('Seconds:',now.getSeconds());


console.log('timestamp:',now.getTime());

console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());