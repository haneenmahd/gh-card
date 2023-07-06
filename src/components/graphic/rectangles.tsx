export interface RectangleProps {
    primaryColor: string
    secondaryColor: string
    tertiaryColor: string
}

export default function Rectangles({ primaryColor, secondaryColor, tertiaryColor }: RectangleProps) {
    return (
        <svg width="238" height="308" viewBox="0 0 238 308" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                id="first"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M51 -23H0V240H51V232.311C58.3543 236.565 66.8928 239 76 239C91.4857 239 105.327 231.96 114.499 220.906L167 331H237.5L145 158H115.233C106.075 146.426 91.9047 139 76 139C66.8928 139 58.3543 141.435 51 145.689V-23ZM115.233 158C121.975 166.521 126 177.29 126 189C126 201.129 121.682 212.248 114.499 220.906L84.5 158H115.233ZM51 145.689V232.311C36.055 223.666 26 207.507 26 189C26 170.493 36.055 154.334 51 145.689Z"
                fill={primaryColor} />
            <path id="second" d="M0 240H51L145 157.5H84L0 240Z" fill={secondaryColor} />
            <path id="third" d="M0 -23H51L143.5 150H84L0 -23Z" fill={tertiaryColor} />
        </svg>
    );
}