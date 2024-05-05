import { hashString } from "../utils/hashString.ts";
import { Item } from "./item.ts";

export const originalData = [
  "Vi skal løfte Norske menn",
  "Vi skal bli en maktfaktor i norsk politikk",
  "Vi står for militant raushet",
  "Vi tar til orde for 4 dagers arbeidsuke",
  "Vi kjører ikke elsparkesykler",
  "Vi tar hensyn til de blinde og handikappede",
  "Vi løser konflikter verbalt, tyr sjelden eller aldri til vold",
  "Vi er de rause ridderne. Rause, ikke-voldelige og ærlige",
  "Vi er kritiske til kvinners aksept for vold mot menn",
  "Vi kjøper heller én billett for mye enn én for lite når vi kjører kollektivt",
  "Når vi tipser, runder vi alltid opp til nærmeste femmer, verken mer eller mindre",
  "Vi tar bading seriøst, og vi mener lek i vann er godt",
  "Vi crawler ikke",
  "Vi tar ikke valg basert på latskap",
  "Vi synes metoo har gått for langt, men bare litt",
  "Vi ler uinteressert av uintelligent kritikk",
  "Vi drikker helmelk fra kartong",
  "Vi respekterer kvinner, men anerkjenner kjønnsforskjellene",
  "Vi driter i kjønnsproblematikk",
  "Vi er de første til å løpe til når noen trenger hjelp til å bære noe",
  "Vi betaler for én strømmetjeneste om gangen",
  "Vi benytter oss av Pirate Bay, eller lignende tjenester om behovet oppstår",
  "Vi benytter oss av bibliotek",
  "Vi prøver å spise mindre kjøtt",
  "Vi bruker klærne til de blir ødelagt. Men vi reparerer ikke",
  "Vi streber etter å avstå fra pornografi, men dersom vi gjør det så gjør vi det i vanlig nettleser med historikken oppe",
  "Vi skjuler ikke hva vi holder på med",
  "Vi bruker ikke TikTok",
  "Vi tror på det gode i mennesket. Det er lov å påpeke flisene i din brors øye, men vær klar over at du har noe rusk i ditt eget også, da",
  "Vi ber om unnskyldning dersom vi har gjort noen vondt",
  "Vi strekker oss langt for å tilgi",
  "Vi mener man ikke bør diskutere politiske temaer på sosiale medier",
  "Vi er snille og direkte. Vi går fryktløs inn for kysset og føler ingen skam om vi blir avvist",
  "Vi opererer like under grensen for utbrenthet",
  "Vi behersker tastatursnarveier",
  "Vi foretrekker stasjonær datamaskin framfor laptop og laptop framfor telefon",
  "Vi har ikke iPad",
  "Vi danser alltid i situasjoner hvor det forventes dans, selv når det byr oss imot",
  "Vi bryr oss om fjordene våre",
  "Vi tar vare på naturen",
  "Ser vi hverandre i offentligheten, så gjør vi ikke noe nummer ut av det",
  "Vi trenger ikke mobilen når vi skal urinere",
  "Vi respekterer at våre ledere ønsker å tjene penger på vår bevegelse",
  "Vi investerer",
  "Vi unngår unødig baksnakking",
  "Vi er ikke på jodel",
  "Vi heier også på de som tør å stikke seg fram",
  "Vi liker YouTube og Wikipedia",
  "Vi har som plikt å kunne noen trylletriks",
  "Vi har et ansvar for at trafikken flyter",
  "Vi kjører stasjonsvogn",
  "Vi vet hvilken blodtype vi har",
  "Vi er mer åpne for konspirasjonsteorier enn offentligheten for øvrig",
  "Når vi går på graven og tenner lys, så har vi alltid med oss et ekstra lys, som vi tenner for graven ved siden av den vi legger for",
  "Vi oppfører oss med fremmede som om det er 200 folk som bor i byen",
];

export async function getSeedItems(): Promise<Item[]> {
  const items: Item[] = [];
  for (let i = 0; i < originalData.length; i++) {
    const content = originalData[i];
    const id = await hashString(content);
    items.push({
      id,
      content,
      votes: 0,
    });
  }

  return items;
}
