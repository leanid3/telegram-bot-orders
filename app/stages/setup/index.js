import { Scenes } from "telegraf";
import { pickFilter } from "../scenes/pickFilter.js";
import { setText } from "../scenes/setText.js";

export const SetupStage = new Scenes.Stage([
    pickFilter,
    setText
])