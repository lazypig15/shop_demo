var jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {

	var token = req.query.token;
	// token不存在，.失败
	if (!token) {
		res.json({
			code: 0
		})
		return;
	}

	// token校验
	//para1:待校验的token
	// para2:签名时的密钥
	// para3:回调函数
	jwt.verify(token, "hello world", (error, decode) => {
		console.log(error);
		console.log(decode);
		if (error) {
			res.json({
				code: 0
			})
			return;
		}
		// token校验通过；保存解析的username; 
		req.query.username = decode.username;
		// 下一步
		next();
	})
}