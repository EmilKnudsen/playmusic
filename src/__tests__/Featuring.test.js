import mockedAxios from "axios";
import { act, cleanup, render, screen, waitFor } from "@testing-library/react";
import Featuring from "../pages/Featuring";
import TokenContext from "../TokenContext";

afterEach(cleanup);
jest.mock("axios");

describe("Featuring Page", function () {
	var response = {
		data: {
			playlists: {
				items: [
					{
						id: 1,
						images: [
							{
								url: "https://via.placeholder.com/600",
							},
						],
						name: "FT Someone",
						type: "playlist",
					},
					{
						id: 2,
						images: [
							{
								url: "https://via.placeholder.com/600",
							},
						],
						name: "FT a singer",
						type: "playlist",
					},
				],
			},
		},
	};

	var mockContext = [
		{
			access_token: "1234",
		},
	];

	it("Shows songs featuring an artist", async function () {
		mockedAxios.get.mockResolvedValue(response);

		act(function () {
			render(
				<TokenContext.Provider value={mockContext}>
					<Featuring />
				</TokenContext.Provider>
			);
		});

		await waitFor(function () {
			var text = screen.getByText(/ft a singer/i);
			expect(text);
		});
	});
});
