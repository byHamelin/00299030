import fs from "fs";
import path from "path";

export default class CriticalRoll {
constructor(api) {
this.api = api;
}

load() {
this.api.on("roll", (event) => {
if (event.result === 20) {
this.api.sendMessage("Foundry");
}
});
}
}

export const module = {
name: "Critical Roll",
description: "Um módulo para FoundryVTT que escreve no chat: "Foundry" toda vez que algum jogador tirar 20",
load: async (api) => {
const module = new CriticalRoll(api);
module.load();
return module;
},
};