import NigeriaState from "naija-state-local-government";

export const States = NigeriaState.states();
export const All = NigeriaState.all();

export const Lga = (state) => NigeriaState.lgas(state);
