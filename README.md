# Adams Sample Project (Fund)

A sample fund built on top of Stripe, where users can donate monthly or yearly.

## Project Setup

```cd``` into the project directory and run:

```bash
npm init # press enter for all options
npm install # to install dependencies
```

## Database Setup
Open the ```.env.local``` file and follow these steps:

1) Add a value for ```JWT_SECRET``` (it can be anything for the purpose of testing).
2) Add a value for ```DB_URI```, which has to be a mongo db either on your local machine or hosted somewhere (e.x. mongodb.com). If on your local machine, make sure that you're running mongo in another console tab. An example URI can be: ```mongodb://localhost:27017/fund```.

## Running the project
Whilst in the project directory, run this command:
```bash
npm run dev
```
The website will run on ```http://localhost:3000```.

## License
[MIT](https://choosealicense.com/licenses/mit/)