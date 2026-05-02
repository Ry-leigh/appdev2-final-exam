import { mutation } from "./_generated/server"
import { v } from "convex/values"
import bcrypt from "bcryptjs"

export const login = mutation({
    args: {
        username: v.string(),
        password: v.string()
    },
    handler: async (ctx, args) => {
        const user = await ctx.db.query("users")
            .filter((q) => q.eq(q.field("username"), args.username))
            .unique();

        if (!user) {
            return { success: false, message: "User not found!" }
        }

        const passwordCorrect = bcrypt.compareSync(args.password, user.password)

        if (!passwordCorrect) {
            return { success: false, message: "Invalid credentials!" }
        }

        return {
            success: true,
            userId: user._id
        }
    }
})

export const register = mutation({
    args: {
        username: v.string(),
        password: v.string(),
        fullname: v.string()
    },
    handler: async (ctx, args) => {
        const user = await ctx.db.query("users")
            .filter((q) => q.eq(q.field("username"), args.username))
            .unique();

        if (user) {
            return { success: false, message: "User already exists!" }
        }

        const hashedPassword = bcrypt.hashSync(args.password, 10);

        const userId = ctx.db.insert("users", {
            username: args.username,
            password: hashedPassword,
            fullname: args.fullname
        });

        return userId;
    }
})