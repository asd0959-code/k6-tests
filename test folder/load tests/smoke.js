import http from "k6/http";
import { sleep } from "k6";

export const options = {
  vus: 5,          // 5 виртуальных пользователей
  duration: "10s", // тест идёт 10 секунд
};

export default function () {
  http.get(`${__ENV.BASE_URL}/users`);
  sleep(1);
}
