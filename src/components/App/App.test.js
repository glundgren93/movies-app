import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "./App";

test("SearchBar works", async () => {
  render(<App />);
  const searchInput = await screen.findByPlaceholderText(
    /Search for your favorite movies/i
  );
  fireEvent.change(searchInput, { target: { value: "batman" } });

  await waitFor(() => {
    expect(screen.getByText("The Batman")).toBeInTheDocument();
  });
});
