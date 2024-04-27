/* Kennert Heiden
23.04
Yl2*/
let tund = 2;
let minut = 38;
let sekund = 59;
let kellaeg = tund+":"+ minut+":"+sekund+"PM";
console.log(kellaeg);
let quote = "\"All that glitters is not gold\" William Shakespeare";
console.log(quote);
let perenimi = "Jurakas";
let eesnimi = "Jüri";
let luhend = `${eesnimi} ${perenimi} nimetähed on ${eesnimi[0]}.${perenimi[0]}`;
console.log(luhend);
let nimi = "Perenimi, Eesnimi";
let komakoht = nimi.charAt(8);
let nimi2 = nimi.replace("Perenimi", perenimi);
let nimi3 = nimi2.toUpperCase("Jurakas");
console.log(nimi3);
console.log(perenimi.length);
let epost = "cbtkonto@as.com";
console.log(epost.replace("as", "gmail"));
let ipnid = "1,Marshal,Martinovic,mmartinovic0@dedecms.com,Male,40.19.226.175";
console.log(ipnid.substring(51,64)+ " ja "+ipnid.substring(21,33));
