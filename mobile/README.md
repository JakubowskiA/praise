## Running the app

- run `yarn` or `npm install`
- Open `app` with [`yarn start ios`](https://docs.expo.io/versions/latest/workflow/expo-cli/), try it out.

### Running the server (optional)

- `cd` into the `api` directory and run `yarn` or `npm install`, then run `yarn start`
- Install [ngrok](https://ngrok.com/download) and run `ngrok http 4000` and copy the https url that looks something like this `https://f7333e87.ngrok.io`. This is required because WebSockets require https.
- Open `mobile/App.js` and change the `socketEndpoint` at the top of the file to point to your endpoint.
