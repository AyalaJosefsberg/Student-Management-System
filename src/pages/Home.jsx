import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export function Home() {
    return (
      <div
    style={{
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        direction: 'rtl',
        padding: '20px',
        boxSizing: 'border-box',
        background: 'linear-gradient(135deg, #eef2ff 0%, #f8fafc 100%)',
    }}
>
            <h1
                style={{
                    fontSize: '3.5rem',
                    fontWeight: '800',
                    margin: '0 0 10px 0',
                    background: 'linear-gradient(90deg, #4f46e5, #7c3aed)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                }}
            >
                ברוכים הבאים!
            </h1>

            <p
                style={{
                    fontSize: '1.4rem',
                    color: '#64748b',
                    margin: '0 0 20px 0',
                }}
            >
                מערכת לניהול תלמידות
            </p>

         <div style={{ width: '100%', maxWidth: '600px' }}>
    <DotLottieReact
        src="https://lottie.host/f9879347-5bc5-4241-a61d-e8a2cd3eca02/mIPvRRjK0x.json"
        loop
        autoplay
        renderConfig={{ devicePixelRatio: window.devicePixelRatio * 2 }}
    />
</div>
        </div>
    );
}