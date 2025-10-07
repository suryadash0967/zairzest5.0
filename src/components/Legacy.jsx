function Legacy() {
    return (
        <div className="legacy-wrapper" id="about">
            <div className="about-zairzest-wrapper">
                <div className="about-zairzest-head">
                    About <span style={{ color: "#E9270A" }}>ZAIRZEST</span>
                </div>
                <div className="about-zaiezest-desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
            </div>
            <div className="legacy-grid">
                <div className="legacy-top-grid">
                    <div className="legacy-top-left">
                        <div className="start-date legacy-card">
                            <div className="card-main">2021</div>
                            <div className="legacy-card-bottom legacy-zairzest-start">
                                <div>Started in</div>
                                <div>DD MM, 2021</div>
                            </div>
                        </div>

                        <div className="four-o-pic legacy-card">

                            {/* PIC - BACKGROUND IN CSS */}
                            <div className="card-main"></div>

                            <div className="legacy-card-bottom legacy-four-o-desc">
                                <div>Zairzest 4.0</div>
                                <div>Conducted in 2024</div>
                            </div>
                        </div>
                    </div>

                    <div className="legacy-top-right legacy-card">
                        
                        {/* VIDEO - BACKGROUND IN CSS */}
                        <div className="card-main">Video</div>

                    </div>
                </div>
                <div className="legacy-bottom-grid">
                    <div className="legacy-bottom-left">
                        <div className="design-domains legacy-card">
                            <div className="card-main">Design</div>
                            <div className="legacy-card-bottom legacy-domains">
                                <div>Domains</div>
                                <div>X domains</div>
                            </div>
                        </div>
                        <div className="footfalls legacy-card">
                            <div className="card-main">670+</div>
                            <div className="legacy-card-bottom legacy-footfalls">
                                <div>Footfalls</div>
                                <div>670+ footfalls</div>
                            </div>
                        </div>
                    </div>

                    <div className="legacy-bottom-right">
                        <div className="three-o-pic legacy-card">

                            {/* PIC - BACKGROUND IN CSS */}
                            <div className="card-main"></div>

                            <div className="legacy-card-bottom three-o-desc">
                                <div>Zairzest 3.0</div>
                                <div>Conducted in 2023</div>
                            </div>
                        </div>
                        <div className="four-o-pic legacy-card">
                            <div className="card-main">10+</div>
                            <div className="legacy-card-bottom four-o-desc">
                                <div>Events</div>
                                <div>10+ events</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Legacy