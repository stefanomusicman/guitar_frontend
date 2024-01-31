import { NextRequest, NextResponse } from "next/server";
import { PATH } from "./routes/path";

export function middleware(req: NextRequest) {
    const cookie = req.cookies.get('signedIn');
    const baseUrl = 'http://localhost:3000';
    const url = req.url;

    // Protect the FAVORITES route
    if (cookie === undefined && url.includes(PATH.FAVORITES)) {
        return NextResponse.redirect(`${baseUrl}${PATH.HOME}`);
    }

    // Protect the LOGIN route
    if (cookie !== undefined && url.includes(PATH.LOGIN)) {
        return NextResponse.redirect(`${baseUrl}${PATH.HOME}`);
    }

    // Protect the REGISTER route
    if (cookie !== undefined && url.includes(PATH.REGISTER)) {
        return NextResponse.redirect(`${baseUrl}${PATH.HOME}`);
    }

    // Protect the FORGOT PASSWORD route
    if (cookie !== undefined && url.includes(PATH.FORGOTPASSWORD)) {
        return NextResponse.redirect(`${baseUrl}${PATH.HOME}`);
    }

    return NextResponse.next();
}