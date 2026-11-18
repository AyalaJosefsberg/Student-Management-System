import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export function NotFound() {
    return (
        <div style={{ textAlign: 'center', padding: '50px', direction: 'rtl' }}>
            <h1 >404 - העמוד לא נמצא</h1>
            <div style={{ width: '800px', margin: '0 auto' }}>
                <DotLottieReact 
                  src="https://lottie.host/d8447262-2162-41bc-84fa-5f99756676ac/zpLM8xnqrq.json"
                  loop
                  autoplay
                />
            </div>
        </div>
    );
}