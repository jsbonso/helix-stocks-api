#API of the Helix Stocks Manager App
## Author: Jon Bonso

## Notes:
This is a wrapper for the Bloomberg API. When you connect to their API using Angular, say: https://www.bloomberg.com/markets/watchlist/recent-ticker/GOOG:US you'll encounter a CORS issue. 
To fix this, you can create a new API that wraps the call and then allow CORS.


### How to Run Locally
1. Install the dependencies using this command: `npm install`
2. Start the API using: `npm start`
3. To verify, go to http://localhost:3000

### Deployed as well to Heroku
https://helix-stocks-api.herokuapp.com

### Sample API request
https://helix-stocks-api.herokuapp.com/query?stockTicker=GOOG
