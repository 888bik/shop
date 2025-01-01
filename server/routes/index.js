var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/index', function(req, res, next) {
  res.send({
    code: 0,
    data: {
      categoryList: [
        {
          id: 1,
          imgUrl: 'src/assets/image/category/推荐-反推荐.png',
          title: '推荐'
        },
        {
          id: 2,
          imgUrl: 'src/assets/image/category/电商彩妆家具电子产品.png',
          title: '推荐'
        },
        {
          id: 3,
          imgUrl: 'src/assets/image/category/衣服,服装.png',
          title: '服装'
        },
        {
          id: 4,
          imgUrl: 'src/assets/image/category/回流区日用百货.png',
          title: '日用百货'
        },
        {
          id: 5,
          imgUrl: 'src/assets/image/category/手机.png',
          title: '手机'
        },
        {
          id: 6,
          imgUrl: 'src/assets/image/category/洗衣机.png',
          title: '家电'
        },
        {
          id: 7,
          imgUrl: 'src/assets/image/category/电脑.png',
          title: '电脑'
        },
        {
          id: 8,
          imgUrl: 'src/assets/image/category/汉堡.png',
          title: '食物'
        }
      ]
    }
  });
});

module.exports = router;