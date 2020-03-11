        

/* travel functions*/ 

var accessibleStationToTrain = [
 "abbey road", "acton central", "acton town", "addington village",
 "addiscombe", "all saints", "ampere way", "anerley",
 "arena", "avenue road", "bank", "barking", 
 "beckenham junction", "beckenham road", "beckton", "beckton park",
 "beddington lane", "belgrave walk", "bermondsey", "birbeck",
 "blackfriars", "blackhorse lane", "blackhorse road", "blackwall",
 "bond street", "bow street", "bow church",  "brentwood",
 "brixton", "brockley", "bromley-by-bow", "buckhurst hill",
 "burnham", "bush hill park", "caledonian road", "caledonian road and barnsbury",
 "camden road", "canada water", "canary wharf", "canning town",
 "canonbury", "carpenders park", "centrale", "chadwell heath",
 "chalfont and latimer", "chesham", "cheshunt", "chingford",
 "chorleywood", "church street", "church street", "clapham junction",
 "coombe lane", "crossharbour", "crystal palace", "cutty sark",
 "cyprus", "dagenham heathway", "dalston junction", "denmark hill",
 "deptford bridge", "devons road", "dundonald road", "earls court",
 "east croydon", "east ham", "east india", "edgeware",
 "edmonton green", "elmers end", "elm park", "elverson road",
 "emerson park", "emirates greenwich peninsula", "emirates royal docks", "enfield town",
 "epping", "euston", "farringdon", "fieldway",
 "finsbury park", "forest gate", "forest hill", "fulham broadway",
 "gallions reach", "george street", "gidea park", "golders green",
 "gospel oak", "gravel hill", "green park", "greenford",
 "greenwich", "hackney central", "hackney wick", "haggerston",
 "hainault", "hammersmith", "hampstead heath", "harringey green lanes",
 "harrington road", "heathrow", "hendon central", "heron quays",
 "high barnet", "highams park", "highbury and islington", "hillington",
 "homerton", "honor oak park", "hounslow east", "hounslow west",
 "hoxton", "imperian wharf", "island gardens", "kensal rise",
 "kensington", "kew gardens", "kilburn", " king george",
 "king henrys drive", "kingscross", "kingsbury", "langdon park",
 "lebanon road", "lewisham", "limehouse", "llyod park",
 "london bridge", "london city airport", "maidenhead", "manor park",
 "maryland", "merton park", "mill hill east", "mitcham",
 "mitcham junction", "morden", "morden road", "mudchute",
 "new addington", "new cross", "new cross gate", "newbury park",
 "north greenwich", "oakwood", "paddington", "phipps bridge",
 "pinner", "pontoon dock", "poplar", "prince regent",
 "pudding mill lane", "reading", "reeves corner", "richmond",
 "roding valley", "romford", "royal albert", "royal victoria",
 "sandilands", "seven kings", "shadwell", "shenfield", "shepards bush",
 "shoreditch high street", "slough", "south acton", "south quay",
 "south tottenham", "south woodford", "southfields", "southwark",
 "stanmore", "stratford", "sudbury town", "sydenham", 
 "therepia lane", "tottenham court road", "tottenham hale", "tower gateway",
 "tower hill", "twyford", "upminster", "upney",
 "upper holloway", "uxbridge", "vauxhall", "victoria",
 "waddon marsh", "walthamstow central", "wandle park", "waterloo",
 "watford junction", "wellesley road", "wembley central", "wembley park",
 "west brompton", "west croydon", "west finchley", "west ham", 
 "west hampstead", "west india quay", "west silverton", "west ferry",
 "westminster", "white hart lane", "willesden junction", "wimbledon",
 "wood lane", "woodford", "woodside", "woolwich arsenal"
]


var form = document.getElementById("travelForm");

function travelSearch (e) {
  e.preventDefault();

  var station = e.target.elements.station.value;

  var isAccessible = accessibleStationToTrain.includes(station);

  if (isAccessible) {
    alert("This station is wheelchair accessible");
  } 
  

  else { 
    alert("Unfortunately this station is not yet wheelchair accessible");
  }
}

form.addEventListener("submit", travelSearch);


/*forum*/






    
  
