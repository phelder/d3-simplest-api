import request from "supertest";
import { expect, it } from "vitest";
import app from "../app";

it("checks health", async () => {
  const response = await request(app).get("/health");

  expect(response.status).toBe(200);
  expect(response.body.message).toBe("Healthy 🙂");
});

it("never fails", () => {
  expect(1).toBe(1);
});
