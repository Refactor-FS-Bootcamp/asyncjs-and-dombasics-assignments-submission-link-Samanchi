const text=[
    'I am baby truffaut meditation jianbing cardigan. Same single-origin coffee street art hella put a bird on it green juice. Banjo green juice iceland, artisan gentrify occupy irony actually. Lumbersexual praxis trust fund shoreditch typewriter selvage vibecession vape live-edge stumptown godard tofu ethical quinoa. Yes plz salvia hashtag farm-to-table meh next level hella gatekeep freegan, affogato sartorial waistcoat deep v. Food truck vaporware vice fixie microdosing franzen. Live-edge salvia bodega boys iceland disrupt trust fund chillwave.',
    'Flexitarian af hella small batch drinking vinegar art party everyday carry man bun artisan farm-to-table offal. Wolf schlitz four loko, gluten-free salvia vibecession activated charcoal chartreuse shoreditch health goth snackwave gastropub iceland gentrify shabby chic. Marfa listicle swag gentrify direct trade taxidermy +1 roof party. Yr thundercats waistcoat subway tile la croix bespoke mlkshk pork belly tacos umami. Mustache before they sold out forage gentrify normcore.',
    'Yr retro actually blue bottle cold-pressed viral yes plz hexagon ethical shaman. Flexitarian tilde beard kickstarter keffiyeh. Freegan gastropub actually tumeric celiac. Iceland venmo enamel pin salvia, hella viral intelligentsia try-hard knausgaard praxis you probably have not heard of them flannel messenger bag narwhal raclette.',
    'Butcher schlitz iPhone, mlkshk celiac biodiesel leggings fanny pack kinfolk. Drinking vinegar jianbing ascot meditation vice ugh tonx lumbersexual sriracha keytar hashtag chillwave. Ascot prism live-edge, seitan bespoke williamsburg forage 3 wolf moon freegan fit. Next level praxis gochujang, mustache bushwick cred fit. Big mood neutra echo park 3 wolf moon narwhal banjo, butcher bruh health goth. Narwhal godard occupy +1. Cronut lomo air plant flannel bushwick slow-carb, tumeric put a bird on it.',
    'Offal cornhole green juice sriracha, flexitarian raclette tumeric yr ethical air plant biodiesel banjo meh butcher. Intelligentsia hoodie polaroid, trust fund farm-to-table tacos humblebrag photo booth. Disrupt cray portland etsy bicycle rights yes plz, offal chartreuse lyft semiotics poke same tilde health goth bespoke. Schlitz vinyl chambray ramps man braid dreamcatcher wolf. Occupy heirloom celiac semiotics, health goth sriracha hashtag master cleanse distillery succulents neutra stumptown vaporware.',
    'Salvia plaid tempor iPhone offal. +1 jianbing taiyaki jean shorts in voluptate typewriter cray cupidatat, selvage authentic vibecession. Raclette flannel Brooklyn cred sed nisi vegan. Pabst cornhole est YOLO sint single-origin coffee tattooed schlitz hammock 90 s pork belly authentic in blue bottle truffaut. Bitters flexitarian YOLO migas authentic, cronut adipisicing synth irure hell of semiotics PBR&B disrupt cardigan lomo. Ennui butcher pinterest coloring book slow-carb magna, veniam roof party tilde gentrify flannel. Disrupt tbh woke, jean shorts venmo kogi blog consectetur.',
    'Yuccie williamsburg pitchfork leggings. Live-edge hashtag in fugiat, tacos consectetur jianbing cillum next level irony. Dolore ascot irure, waistcoat hella skateboard you probably have not heard of them fugiat put a bird on it yuccie health goth hashtag. Aliqua blog chillwave banh mi biodiesel fanny pack mlkshk Brooklyn.',
    `Cray do live-edge, XOXO ascot vape pug pinterest vinyl flannel bicycle rights. Blog aliquip truffaut, minim 8-bit ut etsy. Fit XOXO deep v, air plant whatever succulents kale chips photo booth literally hexagon. Celiac waistcoat cronut, pour-over messenger bag readymade excepteur everyday carry consequat duis craft beer consectetur chillwave.`,
    `Cliche 8-bit shaman vinyl, air plant big mood next level. Et in trust fund kale chips. Green juice neutra consectetur try-hard mumblecore. Art party irure affogato everyday carry subway tile ex same.`,
    `3 wolf moon ut blog meh. Humblebrag literally pabst snackwave bruh, +1 sartorial vaporware. Id etsy DSA poke lorem. Asymmetrical paleo PBR&B, literally eu bodega boys excepteur. Sriracha do post-ironic, schlitz la croix seitan PBR&B humblebrag. Dreamcatcher lomo proident vaporware ad humblebrag ut id blue bottle whatever chia raw denim pickled VHS.`

]


const form=document.querySelector(".lorem-form");
const numofpara=document.getElementById("numofpara");
const numofparaRange=document.getElementById("numofparaRange");
const result=document.querySelector(".lorem-text")

function syncParaNumbers(e){
    const value=e.target.value;
    numofpara.value=value;
    numofparaRange.value=value;

}

form.addEventListener('submit',e=>{
    e.preventDefault();
    const value=parseInt(numofpara.value);
    let temptext=text.slice(0,value);
    temptext=temptext.map(item=> `<p class='result'>${item}</p>`).join("");
    result.innerHTML=temptext;
    
})

numofpara.addEventListener('input',syncParaNumbers);
numofparaRange.addEventListener('input', syncParaNumbers);
