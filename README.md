NodeJS Webcrawler that serves up results over an API

run the command: npm install

then to run the app, either:
1. run the command: node index.js 
2. or, run "Launch" configuration in VSCode

If you want to use firebase, ask me where the settings go. Basically put your firebase creds .json file in the config folder, 
then adjust the settings.js file as needed in the config folder. If you want the cron job enabled, just uncomment it (untested).
Change the urls in the firebase wrapper if you want something different.

There's also a write to file module in the utils folder. Just pass in the path and the data and you can persist it on the filesystem instead of a db.
