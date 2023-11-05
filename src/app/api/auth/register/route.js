import User from "@/models/User";
import connect from "@/utils/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (req) => {
    const { name, email, password } = await req.json();

    await connect();
    const hashPassword = await bcrypt.hash(password, 5)
    const newUser = new User({
        name,
        email,
        password: hashPassword
    });

    try {
        await newUser.save();
        return new NextResponse("User has been created", {
            status: 201
        })
    } catch (err) {
        return new NextResponse(err.messaage, {
            status: 500
        })
    }
};