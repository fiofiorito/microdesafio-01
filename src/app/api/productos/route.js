import { NextResponse } from "next/server";

export function GET() {
    console.log('hola')
    return NextResponse.json({ mensaje: "hola" })
}

