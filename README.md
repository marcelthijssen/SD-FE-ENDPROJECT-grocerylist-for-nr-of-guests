# Grocerylist calculated for number of guests coming for diner

Ik heb een applicatie ontwikkeld die gaat helpen om de boodschappenlijst van ingrediënten, kan aanpassen aan het aantal personen wat komt eten. Het werkt in 4 stappen: 1 zoek een gerecht, 2 voeg het toe aan favorieten, 3 pas per gerecht aan voor hoeveel personen u dit gerecht gaat bereiden, 4 - print de aangepaste boodschappenlijst van dei ingredienten.

![](src/assets/images/website.png)

## Benodigde abonnement
De applicatie maakt gebruik van de Spoonacular-api. Om de applicatie te gebruiken is er een api-key nodig. Een gratis abonnement is aanwezig: https://spoonacular.com/food-api/pricing.

## .env-file
Maak in de root een .env-bestand aan met de volgende tekst:
REACT_APP_SPOONACULAR_KEY=
Daarachter plaatst u de api-key verkregen bij Spoonacular.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
