export default function Contact() {
  return (
    <div className="container mt-5">
      <h2>Contact Us</h2>

      <div className="card p-4 shadow">
        <form>
          <div className="mb-3">
            <label>Name</label>
            <input type="text" className="form-control" />
          </div>

          <div className="mb-3">
            <label>Email</label>
            <input type="email" className="form-control" />
          </div>

          <div className="mb-3">
            <label>Message</label>
            <textarea className="form-control"></textarea>
          </div>

          <button className="btn btn-success">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
