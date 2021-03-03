## Start
Start med at opret en mappe, og kald den et navn, mappen skal stå med småt. Åben derefter mappen i din editor, og skriv i terminalen 
`npx create-react-app .`

Opret 2 mapper i vores "src" mappe som hedder,
1. `__test__`, som skal indeholde vores tests.
2. `components`, som indeholder vores komponenter.

## Komponent
Lav en fil i vores `components` mappe og kald den et navn som giver mening ift. det komponent du vil lave. I mit tilfælde kalder jeg den, "Tutorial.js" første bogstav skal altid stå med stort.

Billedet indeholder et komponent med et `<p>` tag som skal indeholde vores title 
![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/enm25a2ivi19ndsy8blo.png)
 
Tilføj nu vores komponent i filen "app.js". 
1. I toppen importere vi vores komponent, `import Tutorial from "./components/Tutorial";`
2. Skriv nu dit komponents indhold, `<Tutorial title="Welcome to my Tutorial"/>`

**Du har nu lavet et komponent som er klar til at blive testet!**

## Test i React
Ved hjælp af `npm test`, kan vi tjekke om der er fejl i vores komponent. Vi kan f.eks. tjekke efter et specifikt ord i vores komponent.

Billedet indeholder vores test, som tjekker efter ordet "Tutorial"
![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ntf5y9c2u2isq6qo1rmk.png)

**Du har nu lavet en test, og et komponent**

## Pre-commit hooks
Pre-commit hooks sørger for at vi ikke uploader noget kode til github som ikke er blevet kørt at vores test, eller prettier, det gør den ved at køre en command inden.

1. Download `npx mrm lint-staged`
2. Download `npx husky install`
3. Download `npx husky add .husky/pre-commit`
4. Tilføj `npm test` til vores pre-commit fil.
 
**Vi kører nu vores test inden vi laver et commit.**

##Prettier Regler for formattering
Med prettier kan vi sætte nogle grundlæggende formatterings regler for vores kode. Fx kan vi bestemme linjelængde, om vi skal bruge tabs i stedet for mellemrum osv. Dette kan hjælpe andre med at overskue vores kode, og lave en standard hvis man er flere om et projekt.

Opret 2 filer der hedder,

`.prettierrc.json`

**Eksempel på .prettierignore**
`node_modules
build
coverage
.vscode`

## Pre-commit hooks til prettier
Med pre-commit hooks søger vi altid for at vores kode følger vores formatteringsregler inden vi comitter til github, så vores kode altid er overskuelig og læselig inden den bliver smidt på github.

1. Installer `npm i -D cross-env`
2. Tilføj i vores package.json `"test": "cross-env CI=true react-scripts test"`