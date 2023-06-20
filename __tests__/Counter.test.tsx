import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Counter from "../src/app/counter/page";
import { Provider } from 'jotai';
import userEvent from '@testing-library/user-event';

describe('Counter test', () => {
  test('renders the count text', async () => {
    render(
      <Provider>
        <Counter />
      </Provider>
    );

    // 初期値のテスト
    const countText = screen.getByText(/カウント数:/i);
    // getByText : `カウント数` という文字列を取得
    // 正規表現で大文字小文字を区別せずにマッチする要素が取得され
    expect(countText).toBeInTheDocument();
    // toBeInTheDocument : `カウント数`がDOMに要素が含まれているかをチェック
    expect(countText).toHaveTextContent('カウント数: 0');
    // countの初期値は「0」 → 期待される描画の内容 `カウント数: 0`
    // toHaveTextContent : 特定の要素`カウント数: 0`が指定したテキストコンテンツを持つかどうかを検証するためのアサーション

    // screen.debug();
    // + ボタンを押下した時の動き
    const addButton = screen.getByText('+1');
    // +1をgetByTextする
    userEvent.click(addButton);
    // userEventでclick処理をさせる(+1が押下される)

    await screen.findByText('カウント数: 1');
    // 期待される描画の内容は`カウント数: 1`

    console.log("❤️",countText)
    expect(countText).toHaveTextContent('カウント数: 1'); // After clicking +1 button

    const subtractButton = screen.getByText('-1');
    userEvent.click(subtractButton);

    // Use waitFor to wait for the component to update
    await screen.findByText('カウント数: 0');

    expect(countText).toHaveTextContent('カウント数: 0'); // After clicking -1 button
  });
});

