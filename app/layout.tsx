import './globals.css'
import Script from "next/script";

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body>{children}

        <Script id="statcounter" strategy="afterInteractive">
            {`
                        var sc_project=13204934;
                        var sc_invisible=1;
                        var sc_security="9c62e743";
                    `}
        </Script>
        <Script
            src="https://www.statcounter.com/counter/counter.js"
            strategy="afterInteractive"
            async
        />
        <noscript>
            <div className="statcounter">
                <a title="hit counter" href="https://statcounter.com/" target="_blank">
                    <img
                        className="statcounter"
                        src="https://c.statcounter.com/13204934/0/9c62e743/1/"
                        alt="hit counter"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </a>
            </div>
        </noscript>
        
        </body>
        </html>
    )
}