import { useEffect, useState, useRef } from 'react';
function Profile() {
    const [isFlipped, setIsFlipped] = useState(false);
    const qrCodeRef = useRef(null);
    const [qrCodeHeight, setQrCodeHeight] = useState(0);
    const [qrCodeWidth, setQrCodeWidth] = useState(0);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    useEffect(() => {
        const qrImage = qrCodeRef.current;

        const setHeight = () => {
            if (qrImage) {
                setQrCodeHeight(qrImage.offsetHeight);
                setQrCodeWidth(qrImage.offsetWidth);
            }
        };

        if (qrImage?.complete) {
            setHeight();
        } else {
            qrImage?.addEventListener('load', setHeight);
        }

        return () => {
            qrImage?.removeEventListener('load', setHeight);
        };
    }, []);


    return (
        <div className="profile-page-wrapper">
            <div className="profile-page-bg-img"></div>
            <img // SOLELY FOR REF PURPOSES
                ref={qrCodeRef}
                src="/images/profile_qrcode.png"
                alt="measurement helper"
                style={{ position: 'absolute', visibility: 'hidden', zIndex: -1 }}
            />
            <div
                className={`profile-left-container ${isFlipped ? 'flipped' : ''}`}
                onClick={handleFlip}
            >
                <div className="profile-left-wrapper">
                    <div className="left-img-wrapper">
                        <img src="/images/profile_img_1.png" alt="Profile" className="profile-img img1" />
                        <img src="/images/profile_img_2.png" alt="Profile" className="profile-img img2" />
                    </div>
                    <div className="profile-img-desc">
                        <div className="qrcode image-mf">
                            <img src="/images/profile_img_f.png" alt="" className="profile-img-mf" style={{ width: qrCodeWidth ? `${qrCodeWidth}px` : 'auto' }} />
                        </div>
                        <div className="glow-border"></div>
                        <div className="realid">
                            <div className="realid-left">
                                <div>REAL IDENTITY</div>
                                <div>NAME</div>
                            </div>
                            <div className="realid-right">012</div>
                        </div>
                        <div className="glow-border"></div>
                        <div className="zenid-wrapper">
                            <div className="zenid-text">ZEN-ID</div>
                            <div className="zenid-line"></div>
                            <div className="zenid-num">Z2025435XYZ</div>
                        </div>
                        <div className="flip-text">[FLIP TO REVEAL ZEN-CODE]</div>
                    </div>
                </div>

                <div className="profile-left-back-wrapper">
                    <div className="profile-left-wrapper">
                        <div className="left-img-wrapper">
                            <img src="/images/profile_img_1.png" alt="Profile" className="profile-img img1" />
                            <img src="/images/profile_img_2.png" alt="Profile" className="profile-img img2" />
                        </div>
                        <div className="profile-img-desc">
                            <div className="qrcode">
                                <img src="/images/profile_qrcode.png" alt="" className="qrcode-img" />
                            </div>
                            <div className="glow-border"></div>
                            <div className="realid">
                                <div className="realid-left">
                                    <div>REVEAL IDENTITY</div>
                                    <div>NAME</div>
                                </div>
                                <div className="realid-right">012</div>
                            </div>
                            <div className="glow-border"></div>
                            <div className="zenid-wrapper">
                                <div className="zenid-text">ZEN-ID</div>
                                <div className="zenid-line"></div>
                                <div className="zenid-num">Z2025435XYZ</div>
                            </div>
                            <div className="flip-text">[FLIP TO REVEAL IDENTITY]</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="profile-right-container">
                <div className="welcome">Welcome Aboard!</div>
                <div className="creds">LET'S CHECK YOUR CREDENTIALS</div>
                <div className="name">Name: xyz</div>
                <div className="avatar">Avatar: abc</div>
                <div className="zenid-right">ZenID: Z</div>
                <div className="community-btns">
                    <div className="whatsapp-btn"><a href="">JOIN WHATSAPP GROUP</a></div>
                    <div className="events-btn">EXPLORE EVENTS</div>
                </div>
                <div className="note">Note: ZenCode is sent via your registered mail aswell</div>
            </div>
        </div>
    );
}

export default Profile;