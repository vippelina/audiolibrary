# Audio library
Backend service for fetching audio and metadata
 
## Setting up project locally
### Requirements
* NodeJS [Link to install](https://nodejs.org/en/download/)
* NPM - gets installed when installing NodeJs
* MongoDB [Link to install](https://docs.mongodb.com/manual/installation/)

### Steps
1. Clone repo
2. Create .env file with fields set from .env.example
3. Install dependencies by running `npm install`
4. Start a mongoDB instance locally by running `mongod`
5. Build project using npm `npm run build`
6. Start server by running `npm start`

### Watch-mode
Run server in watch-mode by running `npm run watch`. This will compile typescript files and run nodemon that autorestarts the server when changes are made. 

## Future improvements
* Storage handling for audio files. First version locally or just hook the app up to an s3 bucket with the audio files stored there. 
* Enable search for audio by passing query parameters to the list endpoint 
* Add authentication? 
* Deployment management
* Maybe some hooks for committing and pushing to master