#  React News App

This is online news web app using React JS with support of NewsAPI.org API, where users can read news from various source 

## Technology Used

* ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
* ![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
* NewsAPI.org API
* ![VS Code](https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)

## Pre Requisite
* Install ![git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)
* Installation of [![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en/) is mandatory with ![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
*  Login in to [NewsAPI](https://newsapi.org/) api website to get your `API key`


## Run and Setup

1. Fork the Project and clone Repository using git clone

```sh
git clone https://github.com/SubramanyaKS/React-News-App.git
```

2.  Install all dependency in package.json

```sh
npm install
```
3.  Create .env folder and paste the key in variable REACT_APP_API_KEY

```
REACT_APP_API_KEY=<Your API Key>
```

4.  Run application using command

```sh
npm start
```

5. Automatically open the website in localhost

```
http://localhost/3000
```

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

if you want to contribute to this project. 

1. Fork the repository
2. Create a new branch (any name except main and master)
```
git checkout -b xyz
```
3. Make changes and commit your changes.
```
git commit -m "Changes in xyz"
```
4. Push the changes to new branch.
```
git push origin xyz
```
5. Open a pull request


If you like the project 🌟 the repository.

Thank you with ❤ Subramanya KS
