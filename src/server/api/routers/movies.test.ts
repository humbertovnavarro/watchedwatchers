import { beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("../../db.ts");

describe("movie procedure tests", () => {
    beforeEach(() => {
        vi.restoreAllMocks()
    })
})