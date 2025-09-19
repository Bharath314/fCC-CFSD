const { useState } = React;

export function EventRSVPForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [numberOfAttendees, setNumberOfAttendees] = useState(1);
  const [dietaryPreferences, setDietaryPreferences] = useState("");
  const [additionalGuests, setAdditionalGuests] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container">
      <h1>vindNext 2024 RSVP</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="number-attendees">Number of Attendees</label>
          <input
            type="number"
            id="number-attendees"
            name="number-attendees"
            min="1"
            max="10"
            value={numberOfAttendees}
            onChange={(e) => setNumberOfAttendees(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="dietary-preferences">Dietary Preferences:</label>
          <input
            type="text"
            id="dietary-preferences"
            name="dietary-preferences"
            value={dietaryPreferences}
            onChange={(e) => setDietaryPreferences(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="additional-guests">
            Are you bringing additional guests?
            <input
            type="checkbox"
            id="additional-guests"
            name="additional-guests"
            checked={additionalGuests}
            onChange={(e) => setAdditionalGuests(e.target.checked)}
          />
          <span className="checkmark"></span>
          </label>
        </div>
        <button type="submit">Submit RSVP</button>
      </form>
      {submitted && (
        <div className="submitted-message">
          <h3>RSVP Submitted</h3>
          <p>
            <strong>Name:</strong> {name}
          </p>
          <p>
            <strong>Email:</strong> {email}
          </p>
          <p>
            <strong>Number of Attendees:</strong> {numberOfAttendees}
          </p>
          <p>
            <strong>Dietary Preferences:</strong> {dietaryPreferences || "None"}
          </p>
          <p>
            <strong>Bringing Additional Guests:</strong>{" "}
            {additionalGuests ? "Yes" : "No"}
          </p>
        </div>
      )}
    </div>
  );
}
