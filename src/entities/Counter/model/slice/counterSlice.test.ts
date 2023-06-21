import { CounterSchema } from "../types/counterSchema";
import { DeepPartial } from "@reduxjs/toolkit";
import { counterActions, counterReducer } from "./counterSlice";
import { StateSchema } from "app/providers/StoreProvider";

describe("counterSlice.test", () => {
    test("dec", () => {
        const state: CounterSchema = {
            value: 10,
        };
        expect(counterReducer(state, counterActions.decrement())).toEqual({
            value: 9,
        });
    });
    test("inc", () => {
        const state: CounterSchema = {
            value: 10,
        };
        expect(counterReducer(state, counterActions.increment())).toEqual({
            value: 11,
        });
    });
    test("empty", () => {
        expect(counterReducer(undefined, counterActions.increment())).toEqual({
            value: 1,
        });
    });
});
