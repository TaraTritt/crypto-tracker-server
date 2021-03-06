import fetch from "node-fetch";
import { Router } from "express";

import watchlist from "./watchlist";

export default ({ config, db }) => {
  let router = Router();

  // INDEX - show all cryptos in watchlist
  router.get("/", (req, res) => {
    watchlist.getAll(req, res);
  });

  // CREATE - add new crypto to watchlist
  router.post("/", (req, res) => {
    watchlist.createNew(req, res);
  });

  // SHOW - gets more info about one crypto in watchlist
  router.get("/:id", (req, res) => {
    watchlist.get(req, res);
  });

  // UPDATE - update crypto in watchlist
  router.put("/:id", (req, res) => {
    watchlist.put(req, res);
  });

  // DESTROY - remove a crypto from the watchlist
  router.delete("/:id", (req, res) => {
    watchlist.delete(req, res);
  });

  return router;
};
