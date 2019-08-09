import React from "react";
import {render} from "@testing-library/react";
import ScoreboardDisplay from "./ScoreboardDisplay";
import '@testing-library/react/cleanup-after-each';

describe("<ScoreboardDisplay/>", () => {
    it("renders without crashing", () => {
        render(<Display/>);
    });


})