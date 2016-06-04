var items = [
{
  device: "Video Game",
  brand: "Playstation 4",
  price: 2000
},
{
  device: "Computer",
  brand: "Mac OS X",
  price: 3500
},
{
  device: "Mobile",
  brand: "iPhone 6S",
  price: 1700
}
];

var i = 0;

while (i < items.length) {
    for(key in items[i]) {
      console.log(key + " : " + items[i][key]);
    }
  i++;
}
