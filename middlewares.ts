import { NextRequest, NextResponse } from "next/server";
import { useStateValue } from "./context/StateProvider";


export function middleware(req: NextRequest) { 
    const [{user}] = useStateValue()
    let verify = req.cookies.get(user.uid)
    let url = req.url

    if (!verify && url.includes('/dashboard')) {
        return NextResponse.rewrite(new URL('/admin', req.url))
    }
}