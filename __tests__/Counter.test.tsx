import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Counter from "../src/app/counter/page";
import { Provider } from "jotai";
import userEvent from "@testing-library/user-event";

describe("Counter test", () => {
  test("renders the count text", async () => {
    render(
      <Provider>
        <Counter />
      </Provider>
    );
    // 初期値のテスト
    const countText = screen.getByText(/Count:/i);
    // getByText : `カウント数` という文字列を取得
    // 正規表現で大文字小文字を区別せずにマッチする要素が取得され
    expect(countText).toBeInTheDocument();
    // toBeInTheDocument : `カウント数`がDOMに要素が含まれているかをチェック
    expect(countText).toHaveTextContent("Count: 0");
    // countの初期値は「0」 → 期待される描画の内容 `カウント数: 0`
    // toHaveTextContent : 特定の要素`カウント数: 0`が指定したテキストコンテンツを持つかどうかを検証するためのアサーション

    // screen.debug();
    // + ボタンを押下した時の動き
    const plusOne = screen.getByText("+1");
    // +1をgetByTextする
    userEvent.click(plusOne);
    // userEventでclick処理をさせる(+1が押下される)

    await screen.findByText("Count: 1");
    // 期待される描画の内容は`カウント数: 1`
    expect(countText).toHaveTextContent("Count: 1"); // After clicking +1 button

    const subtractButton = screen.getByText("-1");
    userEvent.click(subtractButton);
    // Use waitFor to wait for the component to update
    await screen.findByText("Count: 0");
    expect(countText).toHaveTextContent("Count: 0"); // After clicking -1 button
  });
});

describe("Special counter button test", () => {
  test("test the counter function", async () => {
    render(
      <Provider>
        <Counter />
      </Provider>
    );

    const plusOne = screen.getByText("+1");
    // +1をgetByTextする
    userEvent.click(plusOne);
    userEvent.click(plusOne);
    await screen.findByText("Count: 2");

    const addDoubleButton = screen.getByText("Double");
    userEvent.click(addDoubleButton);
    await screen.findByText("Count: 4");
  });
});

describe("Input number test", () => {
  test("test the form", async () => {
    render(
      <Provider>
        <Counter />
      </Provider>
    );
    expect(
      await screen.findByText(/▼ Please input any number you want to add/)
    ).toBeInTheDocument();
    const inputValue = screen.getByRole("spinbutton") as HTMLInputElement;
    await userEvent.type(inputValue, "8");
    expect(inputValue.value).toBe("8");
  });
  //   using async/await is necessary because you are performing an asynchronous action, which is updating the input value using userEvent.type().
  // The userEvent.type() function is asynchronous because it simulates real user typing, which takes some time to complete. By using await before userEvent.type(), you ensure that the test waits for the typing action to finish before moving on to the next line of code.
});

describe("Reset button test", () => {
  test("test the Reset function", async () => {
    render(
      <Provider>
        <Counter />
      </Provider>
    );

    const countText = screen.getByText(/Count:/i);
    const plusOne = screen.getByText("+1");

    userEvent.click(plusOne);
    userEvent.click(plusOne);
    await screen.findByText("Count: 2");
    const inputValue = screen.getByRole("spinbutton") as HTMLInputElement;
    await userEvent.type(inputValue, "8");

    const addButton = screen.getByText("Add");
    userEvent.click(addButton);
    await screen.findByText("Count: 10");
    expect(countText).toHaveTextContent("Count: 10");

    const resetButton = screen.getByText(/Reset/i);
    userEvent.click(resetButton);

    // Add assertions for the reset behavior
  });
});
