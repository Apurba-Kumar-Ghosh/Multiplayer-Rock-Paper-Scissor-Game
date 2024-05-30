This is a multiplayer rock paper and scissor game created using React and Socket.io along with Express and Nodejs.

If you only want to play: https://apurba-ghosh-game.netlify.app/

This project contains both the server(index.js) and the client(/client/rock-paper-scissor)
Also a separate repo is available if you just want to take a look at client side code: https://github.com/Apurba-Kumar-Ghosh/Stone-Paper-Scissor-App-Client
If you want to take a peek at the code do the following to get started on your local machine:
1. Open repository directory in terminal
2. Run Command -> `npm run build-start-client` -> This command will install all dependencies ans start your client -> You should be redirected to localhost:3000 once this command is completed.

Steps to play:
1. Open `https://apurba-ghosh-game.netlify.app/` or open `localhost:3000` after starting from local terminal
2. You should be able to see the landing page of client along with current Leaderboard
3. Enter your username and click on Join Game
4. You will be added to waiting lobby -> waiting for opponent to get matched
5. Open new browser/tab/pc and go to `https://apurba-ghosh-game.netlify.app` and do the same there with a new username or ask a friend to do the same.
6. You can create as many players as you want. Each player will be paired with another player(if available).
7. You should be redirected into a game of Rock Paper and Scissor
8. Play and see if you can win against your friend/yourself
9. If your opponent gets disconnected(closes browser tab) -> you will be removed from the game as well.

Have fun playing.


PS: If you face some issue with cross-connection or not joining game even if you have two instances runnign...Please restart the server with command: `npm run start-server` and try again. 
