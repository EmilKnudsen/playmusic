import { act, cleanup, render, screen, waitFor } from "@testing-library/react";
import Categories from "../pages/Categories";

afterEach(cleanup);

describe("Categories Page", function () {
	it("shows a list of music categories", function () {
		act(function () {
			render(<Categories />);
		});

		var text = screen.getAllByText(/alternative/i); //getByText
		expect(text);
	});
});
