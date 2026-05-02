import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  todos: defineTable({
    text: v.string(),
    isCompleted: v.boolean(),
    userId: v.id("users")
  }),
  users: defineTable({
    username: v.string(),
    password: v.string(),
    fullname: v.string(),
  })
});
