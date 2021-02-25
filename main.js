function my () {
    i++;
    var numbers_of_family_member_in_array = 4
    if (i > numbers_of_family_member_in_array) {
        i = 0;
    }
    var updatedImage = images[i];
    var updatedName = names[i];
    document.getElementById("family_image").src = updatedImage;
    document.getElementById("family_name").innerHTML = updatedName;
}

var names = ["Fmaily Book",
"Me",
"My Father",
"My Mother",
"My Brother",];
var i = 0;
var images = ["https://i.postimg.cc/MKdhy06Z/family.jpg",
"https://www.jing.fm/clipimg/detail/34-347997_school-boy-girl-clipart-school-boy-animated-png.png",
"https://i.postimg.cc/wjMnFtMX/father.jpg",
"https://i.postimg.cc/JnL6wtrd/sister.jpg",
"https://i.postimg.cc/5ymDKL83/bro.jpg"];
