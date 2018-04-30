import fetch from "node-fetch";
import { Router } from "express";

import CryptoSchema from "../models/Crypto";

export default ({ config, db }) => {
  let router = Router();

  // INDEX - show all cryptos in watchlist
  router.get("/", (req, res) => {
    // Get all cryptos in watchlist from DB
    Crypto.find({}, function(err, watchlist) {
      if (err) {
        console.log(err);
      } else {
        res.json({ message: "Watchlist found" });
      }
    });
  });

  // CREATE - add new crypto to watchlist
  router.post("/", (req, res) => {
    const crypto = new Crypto({
      symbol: req.body.symbol,
      name: req.body.name,
      notes: req.body.notes,
      expirationDate: req.body.expirationDate,
      active: req.body.active,
      targetPrice: req.body.targetPrice
    });
    crypto.save().then(() => {
      res.json({ message: "Crypto added to watchlist" });
    });
  });

  return router;
};