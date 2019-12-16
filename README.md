# NASA PROJECT

![TheForce](./maytheforcestaywithyou.png)

## Description
This is a personal project with photos of the rover curiosity. consulting the API of NASA.

## Objetives
*Pull data from an API. There are lots of options here and here.
    *Avoid any APIs that require OAuth (we'll talk about that later).
    *Many APIs require an API key. Just sign up for an account and attach the key to your URL. Please make sure not to share your secret keys in a public GitHub repo.
    *Some APIs don't allow Cross-Origin Resource Sharing (CORS), meaning you can't make AJAX requests to them. You can get around this by proxying your requests with your Express server.
*Render a list of data from the API.
    *Allow the list to be filtered or searched.
*Show details about a single resource when clicked.
*Look (really) pretty!
  
## Setup

* `git clone` this repo
* `cd` into it.
* `yarn`
* `cd client && yarn `

## To make it run

* `yarn start` from project root
* `yarn start` inside of `/client`