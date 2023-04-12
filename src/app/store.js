import { configureStore } from "@reduxjs/toolkit";
import StudentSlice from "../features/counter/StudentSlice";

export default configureStore({
    reducer: {
        student:StudentSlice
    }
})