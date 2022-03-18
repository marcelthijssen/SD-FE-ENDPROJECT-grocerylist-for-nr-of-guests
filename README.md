# Grocerylist calculated for number of guests coming for diner

Ik heb een applicatie ontwikkeld die gaat helpen bij het maken van één boodschappenlijst van alle ingrediënten, aangepast aan het aantal personen wat komt eten. 
Het werkt in 4 stappen: \
1 - zoek een gerecht\
2 - voeg het toe aan favorieten\
3 - geef per gerecht het aantal personen aan waarvoor u het gerecht gaat bereiden\
4 - print de aangepaste boodschappenlijst\


# Preview
![](src/assets/images/website.png)

#info
Deze applicatie is gemaakt met Webstorm: https://www.jetbrains.com/webstorm. \
En https://www.npmjs.com
Omdat dit een front-end-project is wordt er nu gebruik gemaakt van de Novi-hogeschool back-end.\
Lees hier meer informatie hierover: \
https://github.com/hogeschoolnovi/novi-educational-backend-documentation
# Installatie
Clone deze git-repository via de groene button, of via jouw eigen editor naar uw locale machine.

Installeer alle benodigde dependencies met: \
`npm install`

Eventuele problemen kunt u 

## Benodigde api-key
De applicatie maakt gebruik van een api van Spoonacular. \
Er is een gratis api-key beschikbaar om de applicatie te gebruiken.\
U kunt eventueel een andere api-key aanschaffen om meer data te kunnen ontvangen via:\
https://spoonacular.com/food-api \
Documentatie voor de spoonacular api vindt u hier: \
https://spoonacular.com/food-api/docs

Om de beschikbare api-key te gebruiken, maakt u een nieuw bestand aan in de root-folder genaamd: \
`.env-file`

Plaats daarin de volgende code: \
`REACT_APP_SPOONACULAR_KEY=c3cb27d6fbfc48f4977ee4ac7143e983`

## Available Scripts

Start de applicatie met: \
`npm start`

De app wordt gestart in ontwikkelings-mode. \
Open [http://localhost:3000](http://localhost:3000) om het te bekijken in de browser.

### Jest
Start de tests met: \
`npm start` 

Om de test automatisch te starten bij een wijziging gebruik dan: \
`npm test:watch`

Lees hier meer informatie hierover: [running tests](https://facebook.github.io/create-react-app/docs/running-tests). 
`npm run build`

Bouw de app voor productie met: \
`npm run build`. De build staat in de `build`-folder

Voor meer informatie: [deployment](https://facebook.github.io/create-react-app/docs/deployment).

## Als de applicatie draait.
Kun je in enkele stappen een boodschappenlijst maken, rekening houdend met het aantal gasten wat komt eten. \
1. zoek een gerecht door het invoeren van een of meerdere woorden 
⚠ Alleen engelse woorden gebruiken
2. Voeg een gerecht toe aan favorieten door op het hartje te klikken
3. Ga naar de favorieten door op het getal te klikken
4. Pas het aantal gasten aan 
5. Voeg toe aan de 'shoppinglist'


###Filters
Links kun je in vier verschillende categoriën de zoekresultaten filteren:
1. Types of Cuisine (bijvoorbeeld: italian of carabian)
2. Types of Intolerances (bijvoorbeeld: Dairy of Gluten)
3. Typesof Meals (Bijvoorbeeld: Starter of een Main)
4. Types of Diets (Bijvoorbeeld: Vegan of Gluten Free)
De filters worden actief na klikken op de 'Activate filter'-button of door een nieuwe zoekvraag te starten.

###Er is een mogelijk om een account aan te maken 
Via http://localhost:3000/register kun je een account aanmaken.
wanneer het rustig is op de server, en je bent de eerste die registreerdt, dan moet de server eerst nog opstarten.
Probeer het na een minuut nog een keer.

Na een geslaagde registratie wordt je geredirect naar de inlog-pagina. 
Na het inloggen wordt je geredirect naar je account-pagina.\
Hier kun je de vier filters je eigen voorkeur-selectie instellen en copiëren naar de site. \
Nadat je bent uitgelogd en weer inlogt zijn je voorkeursinstellingen weer beschibaar. 