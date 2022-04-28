## Project aim

This is a graphql api that aggregates news from some popular websites, via:

- Aljazeera
- Bbc
- Channels
- Espn
- Fox

and have the ability to filter through sports, football, basketball, politics, and entertainment.

## How to run api

You can run this api by adding the following query and variables

```javascript
query News($category: String) {
  news(category: $category) {
    logo
    image
    header
    title
    subhead
    time
    tag
    source
  }
}
```

```javascript
{
  "category": "entertainment"
}
```

**Note:** You can change the category variable to filter through category.

## How to run locally

- Clone or download this repository
- Open the cloned folder and run **npm install**
- Now run **npm start** to start the server...
