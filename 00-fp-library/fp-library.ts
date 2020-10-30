export module fplibrary {
  export type Thunk<A> = () => A;
  export type Description<A> = Thunk<A>;

  export namespace Description {
    export function create<A>(a: () => A): Description<A> {
      return a;
    }
  }

  export function compose<A, R>(fn1: (a: R) => R, ...fns: Array<(a: R) => R>) {
    return fns.reduce((prevFn, nextFn) => value => prevFn(nextFn(value)), fn1);
  }
}
