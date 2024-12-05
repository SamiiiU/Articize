import './FlipCard.css'; // CSS file ka import

export default function FlipCard() {
  return (
    <div className="card-container">
      {/* Card */}
      <div className="card">
        {/* Front Side */}
        <div className="card-front">
          <p>Front Content</p>
        </div>

        {/* Back Side */}
        <div className="card-back">
          <p>Back Content</p>
        </div>
      </div>
    </div>
  );
}
