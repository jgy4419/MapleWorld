import React from 'react';

const Loading = () => {
    return (
        <>
            <span className="loader" />
            <style jsx>{`
                .loader {
                    width: 70px;
                    height: 70px;
                    display: inline-block;
                    position: relative;
                }
                .loader::after,
                .loader::before {
                    content: '';  
                    box-sizing: border-box;
                    width: 70px;
                    height: 70px;
                    border-radius: 50%;
                    border: 3px solid #333;
                    position: absolute;
                    left: 0;
                    top: 0;
                    animation: animloader 2s linear infinite;
                }
                .loader::after {
                    animation-delay: 1s;
                }

                @keyframes animloader {
                    0% {
                        transform: scale(0);
                        opacity: 1;
                    }
                    100% {
                        transform: scale(1);
                        opacity: 0;
                    }
                }
            `}
            </style>
        </>
    );
};

export default Loading;