import http from "k6/http";
import { sleep } from "k6";

export const options = {
  stages: [
    { duration: "30s", target: 10 }, // разгон
    { duration: "1m", target: 50 },  // держим 50 юзеров
    { duration: "30s", target: 0 },  // спад
  ],
  thresholds: {
    http_req_duration: ["p(95)<500"], // 95% запросов быстрее 500мс
  },
};

export default function () {
  http.get(`${__ENV.BASE_URL}/users`);
  sleep(1);
}
