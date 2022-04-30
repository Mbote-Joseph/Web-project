function addDarkmodeWidget() {
  new Darkmode().showWidget();
}
window.addEventListener("load", addDarkmodeWidget);
let defaultSize = JSON.parse(localStorage.getItem("website_font_size")) | 15;
document.body.style.fontSize = `${defaultSize}px`;

const increasesize = () => {
  defaultSize = defaultSize + 1;
  localStorage.setItem("website_font_size", JSON.stringify(defaultSize));
  document.body.style.fontSize = `${defaultSize}px`;
};

const decreasesize = () => {
  if (defaultSize > 15) {
    defaultSize = defaultSize - 1;
    localStorage.setItem("website_font_size", JSON.stringify(defaultSize));
    document.body.style.fontSize = `${defaultSize}px`;
  }
};

document.cookie = "username=Mohammed; expires= Tue, 30 Nov 2021 12:00:00 UTC";
function getCookie() {
  username = "";
  return username;
}
function setCookie(username) {
  username = username;
}
function checkCookie() {
  var user = getCookie("username");
  if (user != "") {
    alert("Welcome again " + user);
    $("#greetings").html("Welcome ,", user);
  } else {
    user = prompt("Please enter your name:", "");
    if (user != "" && user != null) {
      document.cookie = setCookie("username", user);
    }
    alert("Welcome again " + user);
  }
}

var datas = [
  {
    title: "Saudi Arabia Culture Facts on Traditional Clothing",
    content:
      "Being the largest country in the Middle East, it almost goes without saying that Saudi Arabia has a diverse climate and geography. This diversity, along with the kingdom’s official religion of Islam, has had a great influence on many aspects of its culture. This includes its traditional clothing. Indeed, the national dress of Saudi Arabia’s people conforms to Islamic standards, local traditions, and climatic conditions. It is for this reason that Saudis still choose traditional clothing, and not the Western style of attire, until today. Saudi people are conservative in their choice of clothing, their family relationships, their religion and way of life in general. So, with all of this in mind, let’s take a look at Saudi traditional clothing. ",
  },

  {
    title: "Saudi Arabia Culture Facts on Traditional Clothing",
    content:
      "The traditional Saudi man wears an ankle-long shirt called a thawb, a long cloak called bisht, all topped off with a three-part headdress. A thawb or thobe is a long, loose, white shirt with long sleeves. Cotton is the fabric of choice, especially during summer. In winter, they usually wear more colorful and heavier thawbs from wool. Men also doubled as a blanket, especially when traveling. Today you mostly see it at ceremonies and festive occasions. Saudi headgear covers the head to ward off the hot sun. It consists of 3 parts: a white skullcap (kufiyyah), a large square of cotton (ghutra) and a stiff, braided, circular cord used to hold all of the parts in (igal).",
  },
  {
    title: "Traditional Dress for Male Saudis",
    content:
      "Saudi women always cover their body. Some leave only their face and wrists uncovered. Others leave only her eyes and wrists visible. They accomplish this by wearing a long dress, an outer cloak called an abaya, and a headscarf called a shayla.<br> The abaya that women wear is always black and usually made from silk or any other synthetic material. It is worn over either a traditional or a modern style with the traditional dress usually made of a bright fabric and embellished with coins, sequins, patterns and other decorative elements. Contrary to popular belief Saudi women do often wear Western style dresses of various designs; however, they must wear an abaya over the top of it when they go out of their homes.<br>Saudi women also wear shayla – a scarf that covers their head and hair, and sometimes even their faces. You may see some women also wear black, light veils called boshiya to cover their faces and eyes. This stems from an old tradition when women wore veils millennia ago to protect their eyes and skin from the hot sun and sand of Arabia.",
  },
];

function process_onload() {
  var html = "";
  for (var index in datas) {
    var data = datas[index];
    html +=
      " <h2 class='h2'>" +
      data["title"] +
      "</h2><p>" +
      data["content"] +
      "</p>";
  }
  $("#data").html(html);
}

var famous = [
  {
    image: "images/img7.jpg",
    title: "The ruins of Al Ula",
    content:
      "The old town of Al Ula is both historical and biblical.In Biblical Times, Al Ula was called “Dedan.” It is mentioned in Isaiah 21:13 as a home trade base of Arab caravans. Today, the old town of Al Ula is a ghost town. No one lives there anymore but there’s a new town that is settled not far from the old.When you think of old towns as a tourist attraction, you’d think of them as fully-renovated places restored for commercial purposes.",
  },
  {
    image: "images/img6.jpg",
    title: "Kaaba",
    content:
      "Once upon a time, a sanctuary in pre-Islamic times, the Kaaba is now a cubical structure, unlike the other religious structure. It is about 15 meters and doors made of gold. It is was added in 1982 and now with several modes of transportation, pilgrims have undertaken the pilgrimage.  The changes made to the structure and its mosque serve as a reminder of how often scared buildings are renovated and remolded over time.  It is a must visit place in Saudi Arabia.",
  },
  {
    image: "images/img8.jpg",
    title: "Masjid Al Rahmah",
    content:
      "Known to be one of the best Saudi Arabia attractions, Al Rahma Mosque is a spiritual site that invites thousands of devotees from every corner of the globe. The excellence of architecture even makes it the best attraction in Jeddah you can never miss. Famous by the name of a floating Mosque, Al Rahma Mosque is so built on pillars submerged underwater that the entire structure appears to be floating.",
  },
  {
    image: "images/img9.jpg",
    title: "Qaisariah Souq",
    content:
      "A traditional market that happens to be one of the oldest marketplaces to visit in the region, Qaisariah Souq was built from 1822 AD to 1238 AH and is one of the most popular places to visit in Al Hofuf. Be it local craft products, enchanting cafés, old Kout square, or the famous Ibrahim Castle, Qaisariah Souq is surrounded by many attractions today and offers a real treat to visitors.",
  },
  {
    image: "images/img10.jpg",
    title: "Al Masmak Fort",
    content:
      "Masmak Fort is among the most historically important sites in the city of Riyadh. “Masmak” means “strong,” and local legend suggests that if this fortress falls, the Kingdom will fall with it.",
  },
  {
    image: "images/img23.jpg",
    title: "Abraj Al-Bait Towers, Makkahr",
    content:
      "Located in Makkah, Abraj Al-Bait Towers is a government-owned complex, comprising seven magnificent skyscraper hotels. This building complex is situated in the vicinity of Masjid al-Haram and has a four-faced clock, which is known to be the highest in the world. I",
  },
];

function process_famous() {
  var test = "";
  for (var index in famous) {
    var data = famous[index];
    test +=
      "<div class='col-md-5 card'><img src=" +
      data["image"] +
      " alt='Avatar' style='width:100%; height: 490px;'><div class='container1'><h2><b>" +
      data["title"] +
      "</b></h2><p>" +
      data["content"] +
      "</p></div></div>";
  }
  $("#famous").html(test);
}

var gallery = [
  {
    image: "images/img7.jpg",
    title: "The ruins of Al Ula",
  },
  {
    image: "images/img6.jpg",
    title: "Kaaba",
  },
  {
    image: "images/img8.jpg",
    title: "Masjid Al Rahmah",
  },
  {
    image: "images/img9.jpg",
    title: "Qaisariah Souq",
  },
  {
    image: "images/img10.jpg",
    title: "Al Masmak Fort",
  },
  {
    image: "images/img23.jpg",
    title: "Abraj Al-Bait Towers, Makkahr",
  },
];

function process_gallery() {
  var test1 = "";
  for (var index in gallery) {
    var data = famous[index];
    test1 +=
      "<div class='col-md-5 card'><img src=" +
      data["image"] +
      " alt='Avatar' style='width:100%; height: 300px;'><div class='container1'><h2><b>" +
      data["title"] +
      "</b></h2></div></div>";
  }
  $("#gallery").html(test1);
}
