var router = require("express").Router();
var pool = require("../modules/db.js");
// JWT(Json Web Token)是实现token技术的一种解决方案;
var jwt = require("jsonwebtoken");

var checktoken = require("../modules/checktoken.js");

// 登录
/*
 *请求方式为：get
 *username
 *password
 *响应内容{code:0,token:null}用户名或密码错误   {code:1,token:"fffsdfe",username:"veb"}成功返回token
 */
router.get("/login", (req, res) => {
	console.log(req.query);
	console.log("login login");
	pool.query("select * from user where username=? and password=?", [req.query.username, req.query.password], (err, data) => {
		if (data.length == 0) {
			res.json({
				code: 0
			})
			return;
		}
		// 签名，获取token
		// para1:对象;待签名数据
		// para2:字符串；签名使用密钥
		// para3:配置对象；expiresIn，有效期，以秒为单位
		var token = jwt.sign({ username: req.query.username }, "hello world", {
			expiresIn: 60 * 60 * 24 * 7
		})

		res.json({
			code: 1,
			token: token,
			username: req.query.username,
		})

	})
})


// 注册
/*
 *请求方式为：get
 *username
 *password
 *响应内容{code:0}被占用   {code:1}成功
 */
router.get("/register", (req, res) => {
	pool.query("insert into user (username,password) values(?,?)", [req.query.username, req.query.password], (error, data) => {
		console.log(error);
		if (error) {
			res.json({
				code:0
			})
			return;
		}
		res.json({
			code: 1
		})
	})
})



// 加入购物车、商品份数增加1
/*
 *请求方式为：get
 *goodId
 *token
 *响应内容{code:0}token无效   {code:1}添加成功 {code:2} 插入失败
 eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IjEyMzQ1NiIsImlhdCI6MTYwMTQzMDk3NCwiZXhwIjoxNjAyMDM1Nzc0fQ.n6gZONapBOf-6dJJdtdvT-5cGndU6FM6X-y9y4ux1Vc
*/

router.get("/add", checktoken, (req, res) => {
	// 判断购物车中是否有该商品
	pool.query("select * from shopcar where goodId=? and username=?", [req.query.goodId, req.query.username], function (err, d) {
		if (err) {
			res.json({
				code: 2
			})
			return;
		}

		//有该商品；更新份数
		if (d.length) {

			pool.query("update shopcar set count=? where goodId=? and username=?", [Number(d[0].count) + 1, req.query.goodId, req.query.username], (err, data) => {
				if (err) {
					res.json({
						code: 2
					})
					return;
				}

				res.json({
					code: 1
				})
				return;
			})

			return;

		}
		// 无该商品，添加商品
		pool.query("insert into shopcar (goodId,username,count) values(?,?,?)", [req.query.goodId, req.query.username, 1], (err, data) => {
			if (err) {
				res.json({
					code: 2
				})
				return;
			}
			res.json({
				code: 1
			})

		})
	})
})

// 商品份数减少1
/*
 *请求方式为：get
 *goodId
 *token
 *响应内容{code:0}token无效   {code:1}成功 {code:2} 失败
*/
router.get("/remove", checktoken, (req, res) => {
	pool.query("select * from shopcar where goodId=? and username=?", [req.query.goodId, req.query.username], function (err, d) {
		if (err) {
			res.json({
				code: 2,
				message: "请求参数错误"
			})
			return;
		}

		if (d.length == 0) {
			res.json({
				code: 3,
				message: "购物车中不存在这项商品"
			})
			return;
		}

		pool.query("update shopcar set count=? where goodId=? and username=?", [Number(d[0].count) - 1, req.query.goodId, req.query.username], (err, data) => {
			if (err) {
				res.json({
					code: 2,
					message: "请求参数错误"
				})
				return;
			}
			res.json({
				code: 1
			})

		})
	})
})



// 删除购物车商品
/*
 *请求方式为：get
 *goodId
 *token
 *响应内容{code:0}token无效   {code:1}删除成功 {code:2} 删除失败
*/

router.get("/del", checktoken, (req, res) => {

	pool.query("delete from shopcar where username=? and goodId=?", [req.query.username, req.query.goodId], (err, data) => {
		
		if (err) {
			res.json({
				code: 2,
				message: "请求参数错误"
			})
			return;
		}
		res.json({
			code: 1
		})
	})
})



// 获取商品列表
/*
 * 参数 type_one  缺省则获取所有分类列表
 *使用实例 /goodlist?type_one=男装  获取所有男装列表
 */
router.get("/goodlist", (req, res) => {

	var sql = "select Id,title,price,mack,nice,img_list_url,type_one,type_two from goods";
	if (req.query.type_one) {
		sql += " where type_one=?";
	}
	if (req.query.page) {
		sql += " limit " + (parseInt(req.query.page) - 1) * 30 + ",30";
	}
	pool.query(sql, [req.query.type_one], (err, data) => {

		res.json(data);
	})

})


// 获取商品详情
/*
 *goodId
 */
router.get("/detail", (req, res) => {

	pool.query("select * from goods where Id=?", [req.query.goodId], (err, data) => {

		res.json(data);
	})

})


// 获取購物車列表
router.get("/shoplist", checktoken, (req, res) => {
	console.log(req.query)
	console.log(checktoken)
	pool.query("select * from shopcar where username=?", [req.query.username], (err, data) => {
		console.log('==',req.query.username, req.query.token);
		console.log(data);

		var list = [];

		var i = 0;

		function getList() {

			pool.query("select * from goods where Id=?", [data[i].goodId], (err, d) => {
				console.log(d);
				if (d.length <= 0) {
					res.json(list);
					return;
				}
				d[0].count = data[i].count

				list.push(d[0]);

				if (i < data.length - 1) {
					i++;
					getList();
				} else {
					res.json(list);
				}
			})
		}
		if (data.length > 0) {
			getList();
		} else {
			res.json(list);
		}
	})
})


/*
 *搜索接口
 *url   /search
 *query word
 *示例: /search?word=男装	
 */
router.get("/search", (req, res) => {

	pool.query("select * from goods where title like ? or type_one=? or type_two=?", ["%" + req.query.word + "%", req.query.word, req.query.word], (err, data) => {
		res.json(data);
	})

})

/*
 *获取一级分类
 *url   /getTypeOne
 */
router.get("/getTypeOne", (req, res) => {
	console.log("getTypeOne")
	pool.query("select type_one from goods", (err, data) => {
		console.log(err);
		console.log(data);

		var data2 = [];

		for (var i = 0; i < data.length; i++) {
			var flag = true;

			for (var j = 0; j < data2.length; j++) {
				if (data[i].type_one == data2[j]) {
					flag = false;
					break;
				}
			}

			if (flag) {
				data2.push(data[i].type_one);
			}

		}


		res.json(data2);
	})

})

// 获取二级分类
// query {type_one:"咖啡"}
router.get("/getTypeTwo", (req, res) => {
	pool.query("select type_two from goods where type_one=?", [req.query.type_one], (err, data) => {
		var arr = [];
		data.forEach(item => {
			arr.push(item.type_two);
		})
		arr = [...new Set(arr)];
		res.json(arr);

	})
})

// 获取二级商品列表
// query {type_one:"咖啡",type_two:"手磨咖啡"}
router.get("/getTypeTwoList", (req, res) => {
	pool.query("select * from goods where type_one=? and type_two=?", [req.query.type_one, req.query.type_two], (err, data) => {
		res.json(data);

	})
})

module.exports = router

