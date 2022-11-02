const microtime = require("microtime");
const downloadCouponDao  = require("../models/couponDownloadDao");
const decimal = [];
const baseList = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const baseSize = baseList.length;
let hashRaw = 0;

const makeCode = async (coupon_id) => { 

    let time = microtime.now();

	/** 임의의 문자열 생성 * */
	// 앞 8자리 base62 ex) n5mVqiJ1

	const getRandomInt = (mininum, maximum) => {
		const min = Math.ceil(mininum);
		const max = Math.floor(maximum);
		return Math.floor(Math.random() * (max - min)) + min;
	};
	
	const getBase62 = (n) => {
		let num = n;
		const res = [];
		do {
		const mod = num % baseSize;
		num = parseInt(num / baseSize);
		res.push(baseList[mod]);
		} while (num > 0);
	
		return res.reverse().join('');
	};

	const frontCode = () => {
		let front = '';
		for (let i = 0; i < 8; i++) {
			const n = getRandomInt(0, 62);
			decimal.push(n);
			front += getBase62(n);
		}
		return front;
	};
	  
	
	const getId = (coupon_id) => {
		
		const id62 = getBase62(coupon_id);
		const strLen = id62.length;
		let res = [];
		if (strLen < 6) {
			for (let i = 0; i < (6 - strLen); i++) {
				res.push('0');
			}
		}
		const arr = id62.split('');
		res = res.concat(arr);
	  
		return res;
	};
	  
	const IdRotate = (coupon_id) => {
		const arrId = getId(coupon_id);
		const rotateNum = hashRaw % 6;
		for (let i = 0; i < rotateNum; i++) {
			arrId.push(arrId[0]);
			arrId.shift();
		}
		let res = '';
		for (let i = 0; i < arrId.length; i++) {
			res += arrId[i];
		}
		return res;
	};
	  
	const frontNum = await frontCode();
	const lastNum = await IdRotate(time);

	const couponCode = frontNum + "-" + time + "-" + lastNum;

	await downloadCouponDao.download(coupon_id,couponCode);

	return true;

}

module.exports = {

    makeCode
}