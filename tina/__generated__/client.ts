import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'https://content.tinajs.io/1.4/content/453972ca-b3e8-40d2-9985-a876b4097e92/github/main', token: 'ca67f2fd73e6604de51dfd25b67f849ea0f76d45', queries,  });
export default client;
  