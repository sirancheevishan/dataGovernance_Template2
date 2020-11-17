import React from "react";

export default function Footer() {
  return (
    <footer className="footer bg-img">
      <div className="container">
        <span className="text-muted">
          copyrights &copy; {new Date().getFullYear()} All rights reserved.
        </span>
      </div>
    </footer>
  );
}
