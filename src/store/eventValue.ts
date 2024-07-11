import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface EventState {
    detailUrl: string
}

const initialState: EventState = {
    detailUrl: ""
};

const eventValue = createSlice({
    name: "eventUrl",
    initialState,
    reducers: {
        detailUrlChange: (state, action: PayloadAction<string>) => {
            state.detailUrl = action.payload;
        }
    }
});

export const {
    detailUrlChange
} = eventValue.actions;

export default eventValue.reducer;