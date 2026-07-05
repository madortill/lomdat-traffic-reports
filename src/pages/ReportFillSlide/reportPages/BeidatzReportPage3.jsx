import beidatz3 from "../../../assets/בידצ3.jpg";
import personalNumber from "../../../assets/9494095.png";
import darga from "../../../assets/סמל.png";
import FamilyName from "../../../assets/אשר-לוי.png";
import FirstName from "../../../assets/שיר.png";
import shirsHatima from "../../../assets/shirs-hatima.png";

function BeidatzReportPage3() {
  return (
    <svg
      id="Layer_2"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 2132 3000"
    >
      <defs>
        <style>
          {`.cls-1 {
        fill: none;
      }`}
        </style>
      </defs>

      <g id="Layer_1-2" data-name="Layer_1">
        <g>
          <image width="2132" height="3000" xlinkHref={beidatz3} />
          <rect
            className="cls-1"
            x="1110.22"
            y="180.39"
            width="129.91"
            height="50.09"
          />

          <rect
            className="cls-1"
            x="819.87"
            y="180.39"
            width="282.91"
            height="50.09"
          />

          <rect
            className="cls-1"
            x="1240.13"
            y="230.48"
            width="343.17"
            height="61.17"
          />

          <rect
            className="cls-1"
            x="707.96"
            y="236.74"
            width="241.43"
            height="61.17"
          />

          <rect
            className="cls-1"
            x="1179.61"
            y="297.91"
            width="265.65"
            height="57.78"
          />

          <rect
            className="cls-1"
            x="950.3"
            y="355.7"
            width="311.83"
            height="55.17"
          />

          <rect
            className="cls-1"
            x="653.3"
            y="355.7"
            width="160.39"
            height="55.17"
          />

          <rect
            className="cls-1"
            x="174.35"
            y="363.26"
            width="341.17"
            height="55.17"
          />

          <rect
            className="cls-1"
            x="1847.43"
            y="258"
            width="30"
            height="27.13"
          />

          <rect
            className="cls-1"
            x="1404.04"
            y="377.28"
            width="30"
            height="27.13"
          />

          <rect
            className="cls-1"
            x="901.61"
            y="377.28"
            width="30"
            height="27.13"
          />

          <rect
            className="cls-1"
            x="609.3"
            y="381.98"
            width="30"
            height="27.13"
          />

          <rect
            className="cls-1"
            x="1327.52"
            y="423.13"
            width="54.39"
            height="54.39"
          />

          <rect
            className="cls-1"
            x="1207.74"
            y="424.7"
            width="54.39"
            height="54.39"
          />

          <rect
            className="cls-1"
            x="869.7"
            y="486.65"
            width="365.24"
            height="46.96"
          />

          <rect
            className="cls-1"
            x="1789"
            y="543"
            width="134.09"
            height="54.78"
          />

          <rect
            className="cls-1"
            x="1527.09"
            y="543"
            width="242.61"
            height="54.78"
          />

          <rect
            className="cls-1"
            x="173.17"
            y="649.04"
            width="1596.52"
            height="78.65"
          />
          
          <rect
            className="cls-1"
            x="185.7"
            y="496.04"
            width="176.87"
            height="54.78"
          />

          {/* ממולא מראש בדו"ח */}
          <image
            width="726"
            height="369"
            transform="translate(243.62 730.43) scale(.16)"
            xlinkHref={shirsHatima}
          />
          <image
            width="153"
            height="36"
            transform="translate(680.28 738.65) scale(.7)"
            xlinkHref={FamilyName}
          />
          <image
            width="68"
            height="29"
            transform="translate(1041.66 742.91) scale(.72)"
            xlinkHref={FirstName}
          />
          <image
            width="83"
            height="36"
            transform="translate(1286.24 739.03) scale(.63)"
            xlinkHref={darga}
          />
          <image
            width="243"
            height="34"
            transform="translate(1505.28 737.04) scale(.6)"
            xlinkHref={personalNumber}
          />
        </g>
      </g>
    </svg>
  );
}

export default BeidatzReportPage3;
