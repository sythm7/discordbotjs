const prefixe = "&";
const chaine = `${prefixe}Salut ca va`;

const chaine2 = chaine.slice(prefixe.length).split(" ");

console.log(chaine2)