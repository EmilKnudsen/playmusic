import { act, cleanup, render, screen, waitFor } from "@testing-library/react";
import Player from "../pages/Player";

afterEach(cleanup);

describe("Player Page", function () {
	it("shows the Player page", function () {
		act(function () {
			render(<Player />);
		});

		var text = screen.getAllByText(/don't call me up/i); //getByText
		expect(text);
	});
});
