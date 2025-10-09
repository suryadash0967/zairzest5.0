import { useEffect, useState, useRef } from 'react';
import axios from 'axios'; // Import axios
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Profile() {
    const [isFlipped, setIsFlipped] = useState(false);
    const qrCodeRef = useRef(null);
    const [qrCodeHeight, setQrCodeHeight] = useState(0);
    const [qrCodeWidth, setQrCodeWidth] = useState(0);

    // --- NEW: State for user data, loading, and errors ---
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    // --- NEW: Fetch user data on component mount ---
    useEffect(() => {
        const fetchUserData = async () => {
            const token = localStorage.getItem('authToken');
            if (!token) {
                navigate('/login'); // Redirect if not logged in
                return;
            }

            try {
                const response = await axios.get(
                    'https://zairzest-backend-2025-01-1.onrender.com/api/users/get/user',
                    {
                        headers: {
                            Authorization: `Bearer ${token}`, // Send token for authentication
                        },
                    }
                );
                setUser(response.data); // Save user data to state
            } catch (err) {
                setError('Failed to fetch user data. Please log in again.');
                localStorage.removeItem('authToken'); // Clear bad token
                navigate('/login');
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, [navigate]);
    
    // This useEffect remains for QR code measurement
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

    // --- NEW: Render loading or error states ---
    if (loading) {
        return <div className="profile-page-wrapper" style={{ color: 'white', fontSize: '2rem' }}>Loading Profile...</div>;
    }

    if (error) {
        return <div className="profile-page-wrapper" style={{ color: 'red', fontSize: '2rem' }}>{error}</div>;
    }
    
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
                            {/* --- DYNAMIC DATA: User's avatar/image can go here --- */}
                            <img src="/images/profile_img_f.png" alt="" className="profile-img-mf" style={{ width: qrCodeWidth ? `${qrCodeWidth}px` : 'auto' }} />
                        </div>
                        <div className="glow-border"></div>
                        <div className="realid">
                            <div className="realid-left">
                                <div>REAL IDENTITY</div>
                                {/* --- DYNAMIC DATA: User Name --- */}
                                <div>{user?.name.toUpperCase()}</div>
                            </div>
                            <div className="realid-right">{/* Your ID logic here */}</div>
                        </div>
                        <div className="glow-border"></div>
                        <div className="zenid-wrapper">
                            <div className="zenid-text">ZEN-ID</div>
                            <div className="zenid-line"></div>
                             {/* --- DYNAMIC DATA: ZenID --- */}
                            <div className="zenid-num">{user?.zenId || 'Z-ID-MISSING'}</div>
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
                                {/* --- DYNAMIC DATA: QR Code from user data --- */}
                                <img src={user?.qrCode || "/images/profile_qrcode.png"} alt="QR Code" className="qrcode-img" />
                            </div>
                            <div className="glow-border"></div>
                             <div className="realid">
                                <div className="realid-left">
                                    <div>REVEAL IDENTITY</div>
                                    {/* --- DYNAMIC DATA: User Name --- */}
                                    <div>{user?.name.toUpperCase()}</div>
                                </div>
                                <div className="realid-right">{/* Your ID logic here */}</div>
                            </div>
                            <div className="glow-border"></div>
                            <div className="zenid-wrapper">
                                <div className="zenid-text">ZEN-ID</div>
                                <div className="zenid-line"></div>
                                {/* --- DYNAMIC DATA: ZenID --- */}
                                <div className="zenid-num">{user?.zenId || 'Z-ID-MISSING'}</div>
                            </div>
                            <div className="flip-text">[FLIP TO REVEAL IDENTITY]</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="profile-right-container">
                <div className="welcome">Welcome Aboard!</div>
                <div className="creds">LET'S CHECK YOUR CREDENTIALS</div>
                {/* --- DYNAMIC DATA --- */}
                <div className="name">Name: {user?.name}</div>
                <div className="avatar">Email: {user?.email}</div>
                <div className="zenid-right">ZenID: {user?.zenId}</div>
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