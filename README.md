# tumblrSearch

To set up environment:
1. Run 'npm install' in command line to install node modules.
2. Run 'npm start' in command line to start server.
2. Run 'webpack' in command line to bundle code.
3. Navigate to 'localhost:3000' in Chrome browser. App is optimized only for Chrome browser.

About the App:

App's front-end environment built using React, Webpack, ES6, and pure CSS.

As to component layout, App contains a main App Component which contains three direct child components: FavoritesList (handle Favorites logic), ResultsList (handles Search Results logic), and SearchBar (handles Search logic). The app also contains three re-usable ListEntry components (one for Photo-type Posts, one for Text-type posts, one for Video-type posts, one for Link-type posts, and one for Quote-type posts). These components can be used in either the Results List or Favorites List.

As to front-end functionality, the App meets the all of the requirements described for the challenge.
Searching:
On searching a specific Blog Name with no tag, posts for that blog are rendered. On searching for a Tag with no Blog Name, posts for that tag are rendered. On searching for a blog name with a tag name, posts from the given blog with the given tag are rendered. If no results are received when search is completed, user is notified that "No Search Results are Available". App also contains light form validation. If user attempts to execute search having typed nothing in either Blog Name or Tag inputs, an error is thrown. If user attempts to execute search for either Blog Name or Tag that contains only whitespace, an error is thrown.

Adding and Removing:
On clicking Add button on a Results List Entry, that post is added to the Favorites List. On click Remove button on a Favorites List Entry, that post is removed from the Favorites List.


App's back-end built on a Node.js server.




