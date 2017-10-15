const lyricsService = require (__dirname+"/../services/lyrics.js");

module.exports = (server, lyricsRef) => {
  server.get("/lyrics/:id", lyricsService.getById(lyricsRef));
  server.get("/lyrics", lyricsService.get(lyricsRef));
  server.post("/lyrics", lyricsService.insert(lyricsRef));
  server.put("/lyrics/:id", lyricsService.update(lyricsRef));
  server.del("/lyrics/:id", lyricsService.remove(lyricsRef));
  return server;
}
