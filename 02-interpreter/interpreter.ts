import { fplibrary } from "../00-fp-library/fp-library";

export namespace Interpreter {
  export function interpret<A>(description: fplibrary.Description<A>): A {
    return description.apply(void 0);
  }
}
