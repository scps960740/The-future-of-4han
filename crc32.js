// function signed_crc_table() {
// 	var c = 0, table = new Array(256);

// 	for(var n =0; n != 256; ++n){
// 		c = n;
// 		c = ((c&1) ? (-306674912 ^ (c >>> 1)) : (c >>> 1));
// 		c = ((c&1) ? (-306674912 ^ (c >>> 1)) : (c >>> 1));
// 		c = ((c&1) ? (-306674912 ^ (c >>> 1)) : (c >>> 1));
// 		c = ((c&1) ? (-306674912 ^ (c >>> 1)) : (c >>> 1));
// 		c = ((c&1) ? (-306674912 ^ (c >>> 1)) : (c >>> 1));
// 		c = ((c&1) ? (-306674912 ^ (c >>> 1)) : (c >>> 1));
// 		c = ((c&1) ? (-306674912 ^ (c >>> 1)) : (c >>> 1));
// 		c = ((c&1) ? (-306674912 ^ (c >>> 1)) : (c >>> 1));
// 		table[n] = c;
// 	}

// 	return typeof Int32Array !== 'undefined' ? new Int32Array(table) : table;
// }

// var T = signed_crc_table();

// function crc32_str(str, seed) {
// 	var C = seed ^ -1;
// 	for(var i = 0, L=str.length, c, d; i < L;) {
// 		c = str.charCodeAt(i++);
// 		if(c < 0x80) {
// 			C = (C>>>8) ^ T[(C ^ c)&0xFF];
// 		} else if(c < 0x800) {
// 			C = (C>>>8) ^ T[(C ^ (192|((c>>6)&31)))&0xFF];
// 			C = (C>>>8) ^ T[(C ^ (128|(c&63)))&0xFF];
// 		} else if(c >= 0xD800 && c < 0xE000) {
// 			c = (c&1023)+64; d = str.charCodeAt(i++)&1023;
// 			C = (C>>>8) ^ T[(C ^ (240|((c>>8)&7)))&0xFF];
// 			C = (C>>>8) ^ T[(C ^ (128|((c>>2)&63)))&0xFF];
// 			C = (C>>>8) ^ T[(C ^ (128|((d>>6)&15)|((c&3)<<4)))&0xFF];
// 			C = (C>>>8) ^ T[(C ^ (128|(d&63)))&0xFF];
// 		} else {
// 			C = (C>>>8) ^ T[(C ^ (224|((c>>12)&15)))&0xFF];
// 			C = (C>>>8) ^ T[(C ^ (128|((c>>6)&63)))&0xFF];
// 			C = (C>>>8) ^ T[(C ^ (128|(c&63)))&0xFF];
// 		}
// 	}
// 	return (C ^ (-1)) >>> 0;
// }

// const num = crc32_str("bruce.tsengtsengtsengtsengtsengtsengtsengtsengtsengtsengtsengtsengtsengtsengtsengtsengtsengtsengtsengtsengtsengtsengtsengtsengtseng")
// // console.log(num);
// // console.log(Math.floor((num / 4294967295) * 100))

// // console.log(num.toString(2));

// // // const buf = Buffer.from([0, 0, 0, 5]);

// // // console.log(buf.readInt32BE(0));

// // // 4294967295
// // console.log('...', Math.pow(2, 32) - 1);

// console.log(num % 100);

// TODO del
console.log(JSON.stringify({ error: new Error('haha').message }))
