export default function TeamIllustration() {
    return (
        <svg
            viewBox="0 0 800 600"
            className="w-full h-auto"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Background - subtle grid */}
            <defs>
                <style>
                    {`
                        .sketch-line {
                            fill: none;
                            stroke-linecap: round;
                            stroke-linejoin: round;
                        }
                        .sketch-fill {
                            fill-opacity: 0.95;
                        }
                    `}
                </style>
            </defs>

            {/* Person 1 - Left, Standing with laptop */}
            <g>
                {/* Head */}
                <circle cx="150" cy="120" r="35" className="sketch-fill" fill="#8B6F47" stroke="#6B5735" strokeWidth="2" />
                {/* Hair */}
                <path d="M 120 110 Q 120 85 150 85 Q 180 85 180 110" className="sketch-fill" fill="#5C3D2E" stroke="#3C1F1A" strokeWidth="2" />
                {/* Body */}
                <rect x="125" y="160" width="50" height="60" rx="8" className="sketch-fill" fill="#E8B4A8" stroke="#8B6F47" strokeWidth="2" />
                {/* Shirt */}
                <rect x="130" y="165" width="40" height="35" className="sketch-fill" fill="#F39221" stroke="#E67E0C" strokeWidth="1.5" />
                {/* Arms */}
                <circle cx="120" cy="180" r="12" className="sketch-fill" fill="#A0826D" stroke="#8B6F47" strokeWidth="1.5" />
                <circle cx="190" cy="175" r="12" className="sketch-fill" fill="#A0826D" stroke="#8B6F47" strokeWidth="1.5" />
                {/* Laptop */}
                <rect x="170" y="220" width="50" height="35" rx="4" className="sketch-fill" fill="#2D3436" stroke="#000" strokeWidth="2" />
                <rect x="172" y="222" width="46" height="28" className="sketch-fill" fill="#444" stroke="#222" strokeWidth="1" />
            </g>

            {/* Person 2 - Center, Sitting at desk */}
            <g>
                {/* Head */}
                <circle cx="400" cy="140" r="38" className="sketch-fill" fill="#9B7B5E" stroke="#7B5B4E" strokeWidth="2" />
                {/* Hair */}
                <path d="M 365 130 Q 365 100 400 98 Q 435 100 435 130" className="sketch-fill" fill="#5C3D2E" stroke="#3C1F1A" strokeWidth="2" />
                {/* Body */}
                <rect x="370" y="180" width="60" height="70" rx="10" className="sketch-fill" fill="#E8B4A8" stroke="#8B6F47" strokeWidth="2" />
                {/* Shirt - Blue */}
                <rect x="375" y="185" width="50" height="40" className="sketch-fill" fill="#4A90E2" stroke="#2E5C8A" strokeWidth="1.5" />
                {/* Arms raised */}
                <path d="M 360 200 L 340 160" className="sketch-line" stroke="#A0826D" strokeWidth="14" />
                <path d="M 440 200 L 460 160" className="sketch-line" stroke="#A0826D" strokeWidth="14" />
                {/* Desk */}
                <rect x="340" y="270" width="120" height="80" rx="8" className="sketch-fill" fill="#D4A574" stroke="#B8935A" strokeWidth="2" />
                {/* Desktop items */}
                <circle cx="380" cy="250" r="8" className="sketch-fill" fill="#FF6B6B" stroke="#E63946" strokeWidth="1.5" />
                <circle cx="420" cy="245" r="7" className="sketch-fill" fill="#4ECDC4" stroke="#2D9B95" strokeWidth="1.5" />
            </g>

            {/* Person 3 - Right, Standing with tablet */}
            <g>
                {/* Head */}
                <circle cx="650" cy="130" r="33" className="sketch-fill" fill="#A68975" stroke="#8B6F47" strokeWidth="2" />
                {/* Hair - curly top */}
                <path d="M 625 125 Q 620 95 650 92 Q 680 95 675 125" className="sketch-fill" fill="#6B4423" stroke="#4B2C13" strokeWidth="2" />
                {/* Body */}
                <rect x="630" y="165" width="40" height="55" rx="7" className="sketch-fill" fill="#E8B4A8" stroke="#8B6F47" strokeWidth="2" />
                {/* Shirt - Green */}
                <rect x="635" y="170" width="30" height="35" className="sketch-fill" fill="#91D050" stroke="#6BA02C" strokeWidth="1.5" />
                {/* Arms */}
                <path d="M 625 180 L 605 200" className="sketch-line" stroke="#A0826D" strokeWidth="11" />
                <path d="M 675 180 L 695 190" className="sketch-line" stroke="#A0826D" strokeWidth="11" />
                {/* Tablet */}
                <rect x="680" y="185" width="45" height="60" rx="6" className="sketch-fill" fill="#2D3436" stroke="#000" strokeWidth="2" />
                <rect x="685" y="190" width="35" height="50" className="sketch-fill" fill="#556B7E" stroke="#333" strokeWidth="1" />
            </g>

            {/* Collaborative elements */}
            {/* Light bulb - idea */}
            <g transform="translate(400, 60)">
                <circle cx="0" cy="0" r="15" className="sketch-fill" fill="#FFE066" stroke="#F4A440" strokeWidth="2" />
                <path d="M -8 15 Q -5 25 5 25 Q 15 25 12 15" className="sketch-fill" fill="#8B6F47" stroke="#6B5735" strokeWidth="2" />
            </g>

            {/* Connection lines - subtle */}
            <path d="M 200 200 Q 300 210 350 220" className="sketch-line" stroke="#F39221" strokeWidth="2" opacity="0.5" strokeDasharray="5,5" />
            <path d="M 450 250 Q 550 240 600 190" className="sketch-line" stroke="#91D050" strokeWidth="2" opacity="0.5" strokeDasharray="5,5" />

            {/* Floating elements */}
            <g opacity="0.6">
                {/* Coffee cup */}
                <path d="M 500 320 Q 490 320 490 335 L 495 350 Q 495 360 505 360 L 515 360 Q 525 360 525 350 L 530 335 Q 530 320 520 320" className="sketch-fill" fill="none" stroke="#D4A574" strokeWidth="2" />
                <circle cx="512" cy="330" r="3" fill="#F39221" />
            </g>

            {/* Handwritten-style text effect - subtle floating words */}
            <text x="700" y="500" fontSize="14" fill="#F39221" opacity="0.3" fontStyle="italic">
                Collaborate
            </text>
            <text x="100" y="480" fontSize="14" fill="#91D050" opacity="0.3" fontStyle="italic">
                Innovate
            </text>
            <text x="380" y="540" fontSize="14" fill="#4A90E2" opacity="0.3" fontStyle="italic">
                Build
            </text>
        </svg>
    );
}
