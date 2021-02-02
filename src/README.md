#

## Lesson 1

## Lesson 2.1

```sh
cd src/app
ionic generate page pages/Lesson21
ionic generate page pages/lesson21/Excercise01
ionic generate page pages/lesson21/Excercise02
ionic generate page pages/lesson21/Excercise03
```

### Lesson 2.3

```sh
ionic generate page pages/lesson23-js
```

### Lesson 2.4

```sh
ionic generate page pages/Lesson24
```

### Lesson 2.5: Mater-Detals List

#### Helper erstellen

```sh
ionic generate service  blocks/helper/Helper
```

#### Seiten erstellen

```sh
ionic generate page pages/lesson25/list/pages/Master
ionic generate page pages/lesson25/list/pages/Details
```

#### Serivce erstellen

```sh
ionic generate service pages/lesson25/list/services/Data
```

ionic generate page pages/lesson25/pages/Master
ionic generate page pages/lesson25/pages/Details

ionic generate service pages/lesson25/services/Store

## PDFs erstellen


### Mit jsPDF

```sh
npm install        dom-to-image --save
npm install @types/dom-to-image --save
```

```sh
npm install        jspdf --save
npm install @types/jspdf --save
```

### Mit pdfkit

```sh
npm install pdfkit
```

## Custom Component erstellen

ionic generate module    blocks\master-details\Components
ionic generate component blocks\master-details\components\Details
