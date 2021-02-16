import { act, cleanup, render, screen, waitFor } from "@testing-library/react";
import Album from "../pages/Album";

afterEach(cleanup);

describe("Album Page", function () {
	it("shows a list of albums and songs", function () {
		act(function () {
			render(<Album />);
		});

		var text = screen.getAllByText(/billy ray cyrus/i); //getByText
		expect(text);
	});
});
