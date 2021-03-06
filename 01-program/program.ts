import { fplibrary } from "../00-fp-library/fp-library";

export namespace Program {
  export const createDescription = (
    args?: Array<string>
  ): fplibrary.Description<void> =>
    fplibrary.Description.create(() =>
      fplibrary
        .compose(
          fplibrary.compose(
            hyphens,
            display,
            question,
            display,
            prompt,
            convertStringToInteger,
            ensurePositiveAmount,
            round,
            createMessage
          ),
          fplibrary.compose(
            display,
            hyphens,
            display
          )
        )
        .apply(args)
    );
  const hyphens = (arg: any) => "\u2500".repeat(50);
  const question = (arg: any) => "How much do you want to deposit?";

  const display = console.log;
  const prompt = (arg: any) => "5";
  const convertStringToInteger = Number;
  const ensurePositiveAmount = (amount: number) => Math.abs(amount) || 1;
  const round = (amount: number): number =>
    !(amount % 100) ? amount : round(amount + 1);
  const createMessage = (balance: number) =>
    `Congratulations, you now have USD $${balance}`;
}
