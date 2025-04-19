import "./NotFound.css";

export default function NotFound() {
  return (
    <div className="NotFound">
      <h1 className="notFound-h1">404 - Page Not Found</h1>
      <p>Oops, looks like you’ve taken a wrong turn!</p>
      <div className="notFound-div">
        Don't worry, you're not lost for long. Let's get you back on track!
      </div>

      <p className="notFound-p">
        <a className="notFound-a" href="/">
          Return to the homepage
        </a>
      </p>
    </div>
  );
}
