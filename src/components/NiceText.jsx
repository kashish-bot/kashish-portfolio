import "./NiceText.css";

const NiceText = () => {
  return (
    <div className="nice-text-wrap">
      <svg
        className="nice-text-svg"
        viewBox="0 0 1440 180"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          id="niceCurve"
          d="M -120 120 C 220 35, 520 35, 760 82 C 980 130, 1130 40, 1560 58"
          fill="none"
        />

        <text className="nice-text">
          <textPath href="#niceCurve" startOffset="0%">
            <animate
              attributeName="startOffset"
              from="-45%"
              to="45%"
              dur="38s"
              repeatCount="indefinite"
            />
            Nice To Meet You! &nbsp; Nice To Meet You! &nbsp; Nice To Meet You! &nbsp; Nice To Meet You! &nbsp; Nice To Meet You! &nbsp; Nice To Meet You!
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export default NiceText;