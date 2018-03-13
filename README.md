# Prudential Weather App

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)

This project demonstrates an AngularJs based Single Page Application to show 5 day weather reports for a hardcoded city (London, as of 12-March-2018).
We are using [Open Weather Map](http://openweathermap.org) 5 day 3 hours API to fetch weather data. 

## Build & development
For all the dependencies, run `npm install && bower install`  
Run `grunt` for building and `grunt serve` for preview.

Currently the site is hosted at [firebase](https://firebase.google.com) 
To redeploy open terminal and enter `firebase deploy` . (make sure you are logged in to firebase and have rights over the repo.) 


## Testing
Test cases are not included as part of this release.
Running `grunt test` will run the unit tests with karma.


## Future Enhancements
This is a minimal implementation and has a margin for improvement. In the next releases, we can:
1. revamp design for better UX. (colors, animation, layout)
2. have a input field for city to check weather in
3. Include unit test cases 
