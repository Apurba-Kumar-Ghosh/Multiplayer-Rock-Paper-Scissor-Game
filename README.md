This is a multiplayer rock paper and scissor game created using React and Socket.io along with Express and Nodejs.

Steps to start in your local server:
1. Open repository directory in terminal
2. Run Command -> `npm run build-start-server` -> This command will install all dependencies and start your server
3. Open a new terminal instance
4. Run Command -> `npm run build-start-client` -> This command will install all dependencies ans start your client -> You should be redirected to localhost:3000 once this command is completed.


Steps to play:
1. After you have got the project running (both client and server)
2. You should be redirected to `localhost:3000`
3. You should be able to see the landing page of client
4. Enter your username and click on Join Game
5. You will be added to waiting lobby -> waiting for opponent to get matched
6. Open new tab and go to `localhost:3000` and do the same there.
7. You can create as many game instances as you want. Each instance will be paired with another instance(if available).
8. You should be redirected into a game of Rock Paper and Scissor
9. Play and see if you can win against yourself
10. If your opponent gets disconnected -> you will be removed from the game as well.
11. After 1 game you should be able to see the Points Leaderboar on the landing page.

Have fun playing.


PS: If you face some issue with cross-connection..Please restart the server with command: `npm run start-server`
