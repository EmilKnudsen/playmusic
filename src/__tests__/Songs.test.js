import { act, cleanup, render, screen, waitFor } from "@testing-library/react";
import Songs from "../pages/Songs";

afterEach(cleanup);

describe("Songs Page", function () {
	it("shows the Songs page", function () {
		act(function () {
			render(<Songs />);
		});

		var text = screen.getAllByText(/Kill This Love/i); //getByText
		expect(text);
	});
});
