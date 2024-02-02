#  React News App

This is a React JS-based online news web app that utilizes the NewsAPI.org API. It allows users to access and read news articles from a wide range of sources.

## Features
* Stay informed with the latest news articles fetched in real-time from NewsAPI.

* Enjoy a user-friendly design that makes browsing news a seamless experience.

* Discover news organized by various categories and topics, making it easy to find articles of interest.

* Dive into full news articles effortlessly by clicking on the respective headlines.

* Whether on a desktop, tablet, or mobile device, the app ensures a consistent and enjoyable experience across different screen sizes.

## Technology Used

* ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
* ![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
* NewsAPI.org API
* ![VS Code](https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)

## Pre Requisite
* Install ![git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)
* Installation of [![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en/) is mandatory with ![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
*  Login in to [NewsAPI](https://newsapi.org/) api website to get your `API key`


## Setup and Run

1. Fork the Project and clone Repository using git clone

```sh
git clone https://github.com/SubramanyaKS/React-News-App.git
```

2.  Install all dependency in package.json

```sh
npm install
```
3.  Create .env folder and paste the your key in variable REACT_APP_API_KEY

```
REACT_APP_API_KEY=<Your API Key>
```

4.  Run application using command

```sh
npm run dev
```

5. Automatically open the website in localhost or just type below url in browser

```
http://localhost/5173
```
**Note:** Currently user details has been removed. you can include if you want.

**Note:** For users details create db.json in root folder and add json in this passion

```json
 {
    "id": 3,
    "name": "",
    "pnumber": "",
    "password": ""
}
```
then run the command at db.json path

```sh
json-server --watch db.json --port <Any Port Number>
```

## Contribution

We welcome contributions! If you'd like to contribute to React-News-App, please follow our [Contribution Guidelines](https://github.com/SubramanyaKS/React-News-App/blob/main/CONTRIBUTING.md).


If you like the project 🌟 the repository.

Thank you with ❤ Subramanya KS
