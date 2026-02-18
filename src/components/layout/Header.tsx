import Link from "next/link";

const Header = () => (
    <header style={{ padding: "1rem", background: "#111", color: "#eee" }}>
        <nav style={{ display: "flex", gap: "1rem" }}>
            <Link href="/">
                Home
            </Link>
            <Link href="/client-post">Client Fetch</Link>
            <Link href="/ssr/1">SSR Example</Link>
            <Link href="/ssg/1">SSG + ISR Example</Link>

        </nav>
    </header>
)


export default Header;