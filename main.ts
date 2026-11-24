import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "P";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY);
