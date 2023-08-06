import Link from "next/link";
import "./globals.css";

// 메타 데이터는 서버 컴포넌트에서만 동작...?
export const metadata = {
    title: "Web tutorials",
    description: "Generated by been",
};

export default async function RootLayout({ children }) {
    const res = await fetch("http://localhost:9999/topics", {
        cache: "no-store",
    });
    const topics = await res.json();

    return (
        <html>
            <body>
                <h1>
                    <Link href="/">WEB</Link>
                </h1>
                <ol>
                    {topics.map((it) => {
                        return (
                            <li key={it.id}>
                                <Link href={`/read/${it.id}`}>{it.title}</Link>
                            </li>
                        );
                    })}
                </ol>
                {children}
                <ul>
                    <li>
                        <Link href="/create">Create</Link>
                    </li>
                    <li>
                        <Link href="/update/1">Update</Link>
                    </li>
                    <li>
                        <input type="button" value="delete" />
                    </li>
                </ul>
            </body>
        </html>
    );
}
