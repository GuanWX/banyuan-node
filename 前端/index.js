// 循环
var arr = [ "hello", 'kitty', 'cat', 4, 'dog']
for ( var i =0 ; i < arr.length;  i++ ){
    console.log('arr[',i,']的值===>',arr[i] );
}
var str = '小红';
var str2 = '小红';
if ( str == str2 ) {
    console.log("str 等于 str2");
}else{
    console.log("str 不等于 str2");
}

// ``
var str1 = `Hello world!`
console.log('str1的值是===>',str1);
console.log('str1的数据类型是===>'+ typeof(str1));
// '' "" 输入时不能换行，``输入可以换行
var test ='一二三';
var str2 = ` ahd ${test}
ahd`;
console.log('str2的值是===>',str2);
var str3 = 'ahd'+test+'ahd';
console.log('str3的值是===>',str3);

// 数学运算
var day = 109/24;
console.log("109/24=",day);
// 向下取整
console.log('向下取整', Math.floor(day) );
// 向上取整
console.log('向上取整', Math.ceil(day) );
console.log('求余：109%24=',109%24);