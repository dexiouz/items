const 
  express = require("express"),
  router  = express.Router();

//Item Model
const Item = require("../../models/item")

// @routw GET api/items
//@desc   Get All Items
//@access Public
router.get("/",(req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items))
});

// @routw POST api/items
//@desc   Create an Item
//@access Public
router.post("/",(req, res) => {
  newItem = new Item({
    name: req.body.name
  });
  newItem.save().then(item => res.json(item));
});

// @routw DELETE api/items/:id
//@desc   Delete an Item
//@access Public
router.delete("/:id",(req, res) => {
  Item.findById(req.params.id)
      .then(item => item.remove().then(() => res.json({success: true})))
      .catch(err => res.status(404).json({success: false}))
})



module.exports = router; 