var friendsData = require("../data/friends");



module.exports = function(app) {
  

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

 
  
  app.post("/api/friends", function(req, res) {
   
    var bestMatch = {
      name: "",
      photo: "",
      friendDifference: 1000
    };
    

    var userData = req.body;
    var userScores = userData.scores;

    var totalDifference = 0;

    for (var i = o; i < friendsData.length; i++){

      console.log(friendsData[i].name);
      totalDifference = 0;

    for (var j = o; j < friendsData.length; j++){

      totalDifference += Mathabs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

      if (totalDifference <= bestMatch.friendDifference) {

        bestMatch.name = friendsData[i].name;
        bestMatch.photo = friendsData[i].photo;
        bestMatch.friendDifference = totalDifference;
      }
    }
  }

  friendsData.push(userData);
  

  res.json(bestMatch);
  });
};
