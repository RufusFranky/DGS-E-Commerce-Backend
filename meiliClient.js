import { MeiliSearch } from "meilisearch";
import dotenv from "dotenv";
dotenv.config();

export const meili = new MeiliSearch({
  host: process.env.MEILI_HOST,
  apiKey: process.env.MEILI_API_KEY,
});

export const productsIndex = meili.index("products");

export async function initSearchSettings() {
  await productsIndex.updateSettings({
    // Only fields we KNOW exist: name + part_number
    searchableAttributes: ["name", "part_number"],
    // No filters for now
    filterableAttributes: [],
    synonyms: {
      tire: ["tyre", "tires", "tyres"],
      tyre: ["tire", "tires", "tyres"],
      tires: ["tire", "tyre", "tyres"],
      tyres: ["tire", "tyre", "tires"],
    },
  });
}
