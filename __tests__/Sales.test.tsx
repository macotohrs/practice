import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Sales from "../src/app/(department)/sales/page";
import { Provider } from "jotai";
import userEvent from "@testing-library/user-event";

describe("Sales test", () => {
  test("renders the Sales text", async () => {
    render(
      <Provider>
        <Sales />
      </Provider>
    );
    // /Sales/i のような形でテストを行う場合、正規表現(/Sales/i)にマッチする要素が複数存在する可能性があるため、ループ(for)を使用してテストする方が良い
    const salesTextElements = screen.getAllByText(/Sales/i);
    salesTextElements.forEach((element) => {
      expect(element).toBeInTheDocument();
    });

    const button = screen.getByText("Storybookで作ったボタン");
    userEvent.click(button);
    await screen.findByText("1");
    const countText = screen.getByText("1");
    expect(countText).toHaveTextContent("1")
  });
});