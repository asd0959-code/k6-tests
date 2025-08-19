import http from "k6/http";
import { check } from "k6";

export const options = {
  vus: 1,
  iterations: 1,
};

export default function () {
  let res = http.get(`${__ENV.BASE_URL}/health`);
  check(res, {
    "статус 200": (r) => r.status === 200,
    "json корректный": (r) => r.headers["Content-Type"].includes("application/json"),
  });
}