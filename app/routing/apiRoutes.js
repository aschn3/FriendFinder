var friendsData = require("../data/friendsData");



module.exports = function(app) {
  

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

 
  
  app.post("/api/friends", function(req, res) {
   
    if (friendsData.length < 10) {
      friendsData.push(req.body);
      res.json(true);
    }
    
    
  });

  
  app.post("/api/clear", function() {
   
    frinedsData = [];
    

    console.log(friendsData);
  });
};
