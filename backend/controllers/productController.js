var db = require('../models');

module.exports.createProduct = async function(req, res, next) {
    // console.log(req.body);
    // res.json(req.body);
         db.Product.create(req.body)
        .then(product => {
            res.json(product);
        })
        .catch(err => {
            next(err);
        });
}
// 
module.exports.createProducts = async function(req, res, next) {
    // console.log(req.body);
    // res.json(req.body);
    req.body.map((product, index) => 
        db.Product.create(product)
    ).then(product => {
            res.json(product);
        })
        .catch(err => {
            next(err);
        });
}
module.exports.getProducts = function(req, res, next) {
    console.log(req.body);
    // res.json(req.body);
    db.Product.find()
    .then(result => {
        res.json(result);
    })
    .catch(err => {
        next(err);
    });

}

module.exports.getProduct = function(req, res, next) {
    // console.log(req.body);
    // res.json(req.body);
    let slug = req.params.slug;
    db.Product.findOne({slug : slug}) 
    .then(result => {
        res.json(result);
    })
    .catch(err => {
        next(err);
    });

}

module.exports.getProductsByCategory = function(req, res, next) {
    console.log(req.body);
    // res.json(req.body);
    db.Category.findOne(req.body).then(resultcat => {
        console.log(resultcat);
          db.Product.find({category :resultcat._id}).populate('category').populate('subcategory')
          .then(result => {
             res.json(result);
          })
          .catch(err => {
              next(err);
          });
    })
    .catch(err => {
        next(err);
    });  
}
//getProductsBySubCategory
module.exports.getProductsBySubCategory = function(req, res, next) {
    console.log({slug : req.body.slug});
    db.Subcategory.findOne(req.body).then(resultcat => {
        db.Product.find({subcategory : resultcat._id}).populate('subcategory')
        .then(result => {
           res.json(result);
        })
        .catch(err => {
            next(err);
        });
    })
    .catch(err => {
        next(err);
    })
}