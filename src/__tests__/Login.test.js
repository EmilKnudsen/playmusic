import { act, cleanup, render, screen, waitFor } from "@testing-library/react";
import Login from "../pages/Login";

afterEach(cleanup);

describe("Login Page", function () {
	it("shows the login page", function () {
		act(function () {
			render(<Login />);
		});

		var text = screen.getAllByText(/spotify login/i); //getByText
		expect(text);
	});
});
