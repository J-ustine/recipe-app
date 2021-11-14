import React from "react";

export default function Detail() {
  return (
    <div>
      <p>
        <a
          className="btn btn-primary"
          data-bs-toggle="collapse"
          href="#collapseExample"
          role="button"
          aria-expanded="true"
          aria-controls="collapseExample"
        >
          Link with href
        </a>
        <button
          className="btn btn-primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          Button with data-bs-target
        </button>
      </p>
      <div className="collapse show" id="collapseExample">
        <div className="card card-body">
          Some placeholder content for the collapse component. This panel is
          hidden by default but revealed when the user activates the relevant
          trigger.
        </div>
      </div>
    </div>
  );
}
