
let now = new Date();
        let day = now.getDate();
        let suffix = getSuffix(day);
        let month = now.toLocaleString('default', {
            month: 'long'
        });
        let year = now.getFullYear();

        document.getElementById("displayDateTime").innerText = `${day}${suffix} ${month} ${year}`;

        function getSuffix(day) {
            if (day > 3 && day < 21) return "th";
            switch (day % 10) {
                case 1:
                    return "st";
                case 2:
                    return "nd";
                case 3:
                    return "rd";
                default:
                    return "th";
            }
        }

$(document).ready(function() {
    var edition = $(".edition");
    var words = ["web designer", "web developer", "graphic designer", "computer science engineer"];
    var index = 0;
    
    function type(word) {
      var i = 0;
      var interval = setInterval(function() {
        edition.text(word.substring(0, i));
        i++;
        if (i > word.length) {
          clearInterval(interval);
          setTimeout(function() {
            deleteWord(word);
          }, 1000);
        }
      }, 100);
    }
    
    function deleteWord(word) {
      var i = word.length;
      var interval = setInterval(function() {
        edition.text(word.substring(0, i));
        i--;
        if (i < 0) {
          clearInterval(interval);
          index++;
          if (index == words.length) {
            index = 0;
          }
          setTimeout(function() {
            type(words[index]);
          }, 1000);
        }
      }, 100);
    }
    
    type(words[index]);
  });

