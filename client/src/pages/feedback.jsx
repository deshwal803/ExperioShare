import { Link } from "react-router-dom";

export default function Feedback() {
  return (
    <div class="col-md-6 main">
      <form action="/sign_up" method="POST" />
      <h2>SignUp Form</h2>
      <input
        type="text"
        class="box"
        id="name"
        name="name"
        placeholder="Name"
        required
      />
      <br />
      <input
        type="text"
        class="box"
        id="email"
        name="email"
        placeholder="Email"
        required
      />
      <br />
      <input
        type="text"
        class="box"
        id="phno"
        name="phno"
        placeholder="Mobile"
        required
      />
      <br />
      <input
        type="text"
        class="box"
        id="Feedback"
        name="Feedback"
        placeholder="Feedback"
        required
      />
      <br />
      <input type="submit" value="Submit" id="submit" />
    </div>
  );
}
