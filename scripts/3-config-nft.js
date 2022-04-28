import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

import dotenv from "dotenv";
dotenv.config();

const editionDrop = sdk.getEditionDrop(process.env.EDITION_DROP_ADDRESS);

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Faker Good Guy",
        description: "This NFT will give you access to EsportDAO!",
        image: readFileSync("scripts/assets/faker_good_guy.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();