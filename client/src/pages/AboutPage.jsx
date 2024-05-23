import "./AboutPage.css";

export default function AboutPage() {
  return (
    <>
      <div className="About">
        <h1>WHO WE ARE ?</h1>
        <p>
          Our project offers a unique solution to simplify the search and
          booking of trips.
          <br /> By simply specifying their criteria, users access a
          personalized selection of destinations, <br />
          avoiding the tedious task of searching across multiple sites.
          <br /> With our intuitive platform, planning a vacation becomes fast,
          efficient, and stress-free.
        </p>
      </div>
      <div className="Formulaire">
        <span className="Doyou">
          <h2>Do you have a question?</h2>
          <p>we are going to answer as quick as possible!</p>
        </span>

        <form action="post">
          <div className="Champs">
            <textarea
              placeholder="Please write your message in this area"
              rows="5"
              cols="10"
            />{" "}
            <br />
            <div className="Contact">
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="e-mail" />

              <button type="button">Send</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
