import { READY, TICK } from "./constants";

export function ready() {
  return { type: READY };
}

export function tick() {
  return { type: TICK };
}

export function succeedAlways() {
  return {
    type: "SUCCEED_ALWAYS",
    meta: {
      offline: {
        effect: { url: "/succeed-always" },
        commit: { type: "SUCCEED_ALWAYS_SUCCESS" },
        rollback: { type: "SUCCEED_ALWAYS_FAILURE" }
      }
    }
  };
}

export function succeedSometimes() {
  return {
    type: "SUCCEED_SOMETIMES",
    meta: {
      offline: {
        effect: { url: "/succeed-sometimes" },
        commit: { type: "SUCCEED_SOMETIMES_SUCCESS" },
        rollback: { type: "SUCCEED_SOMETIMES_FAILURE" }
      }
    }
  };
}

export function failSometimes() {
  return {
    type: "FAIL_SOMETIMES",
    meta: {
      offline: {
        effect: { url: "/fail-sometimes" },
        commit: { type: "FAIL_SOMETIMES_SUCCESS" },
        rollback: { type: "FAIL_SOMETIMES_FAILURE" }
      }
    }
  };
}
