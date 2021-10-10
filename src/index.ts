import { Client } from "./client";

export { Client };

  const client = new Client();
  const body = await client.getStar();
