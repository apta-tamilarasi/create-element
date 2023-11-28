var details=[
    {
    id:1,
    image:"image/taj.jpg",
    title:"TajMahal",
    content:"Built by the famous Mughal Emperor, Shah Jahan for his favorite wife, Mumtaz Mahal, the iconic structure of the Taj Mahal, is the pride of India and more importantly, the epitome of love. Built as early as the 16th century, Taj Mahal is the crown of India which is constructed purely of ivory-white marble and is best witnessed during sunrise."},
    
    {
        id:2,
        image:"image/christ.jpg",
        title:"ChristTheRedeemer",
        content:"Located atop the Corcovado Mountain in Tijuca Forest National Park, the wondrous statue of Christ the Redeemer is perched at a height of 700 metres. Overlooking the city of Rio de Janeiro and constructed during the period of 1922 to 1931, the statue is not only the symbol of the Christian community but is also one of the iconic landmarks of Brazil and Rio."},


    {
        id:3,
        image:"image/wall.jpg",
        title:"GreatWallOfChina",
        content:"Stunning as it looks, Great Wall of China is one of those 7 wonders of the world that need no introduction. Encompassing defensive fortifications that are a perfect blend of bricks, rammed earth, wood, stones, and other substances, the Great Wall of China was built to protect the Chinese region from invasions of empires during the 7th century BCE."},

    {
        id:4,
        image:"image/garden.jpg",
        title:"Hanging-Gardens-of-Babylon",
        content:"Located in the southwestern desert of Jordan, Petra is the world-famous archaeological site that once served as the Nabatean Kingdom’s capital. Boasting its one-of-a-kind pink sandstone cliffs out of which the tombs and temples are sculpted, Al Khazneh is the most famous temple of all. Featuring a facade known as the Treasury, Petra reflects authentic Greek architecture that attracts millions of travellers across the world."},
    

    {
        id:5,
        image:"image/machu.jpg",
        title:"MachuPicchu",
        content:"Perched high on the Andes Mountains and built of limestones that are mortar-free, Machu Picchu is one of the most classic 7 wonders of the world. Dating back to the 15th century, Machu Picchu in Peru is the most renowned structure of the Inca civilization which is famous for its dry-stone walls."},
    

    {
        id:6,
        image:"image/Petra.jpg",
        title:"PetraJordan",
        content:"The renowned structure of Mayan ruins, the city of Chichen Itza boasts of a World Heritage Site of a massive temple – El Castillo, built in the shape of a pyramid. Dedicated to the God of Kukulkan, the structure consists of 91 steps on each side which when totalled with the final step of the temple, equals the number of days in one Haab year, i.e., 365 days."},
    

    {
        id:7,
        image:"image/giza.jpg",
        title:"Giza",
        content:"One of the major tourist attractions of Rome, the Colosseum is indeed one of the iconic 7 wonders of the world. Constructed mainly of sand and concrete, Colosseum is the largest surviving amphitheatre in the world. Built during the time between 70 AD to 72 AD by the famous Emperor Vespasian, Colosseum is much famed as the Flavian Amphitheatre that continues to charm travellers today."},
    {
        id:7,
        image:"image/colosseum.jpg",
        title:"colosseum",
        content:"The Colosseum underwent several radical changes of use. By the late 6th century a small chapel had been built into the structure of the amphitheater, though this apparently did not confer any particular religious significance on the building as a whole. The arena was converted into a cemetery. The numerous vaulted spaces in the arcades under the seating were converted into housing and workshops, and are recorded as still being rented out as late as the 12th century"},
];




var create=document.getElementById("create");


var section=document.createElement("section");
    section.classList.add("card-section");
    create.appendChild(section);

var container=document.createElement("div");
    container.classList.add("card-container");
    section.appendChild(container);
    
var row=document.createElement("div");
    row.classList.add("card-row");
    container.appendChild(row);



details.forEach(function (e){
var col=document.createElement("div");
    col.classList.add("card-col");
    row.appendChild(col);


var card=document.createElement("div");
    card.classList.add("card-card");
    col.appendChild(card);

var picture=document.createElement("img");
    picture.classList.add("card-image");
    picture.setAttribute("src",e.image);
    card.appendChild(picture);

var head=document.createElement("h1");
    card.appendChild(head);
    head.innerHTML=e.title;

var para=document.createElement("p");
    card.appendChild(para);
    para.innerHTML=e.content;


});
